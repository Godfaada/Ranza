import { PrismaClient, UserRole, TripType, TripStatus, KycStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Users
  const users = await Promise.all(
    Array.from({ length: 10 }).map(async (_, i) => {
      const role = i % 3 === 0 ? UserRole.DRIVER : UserRole.PASSENGER;
      const u = await prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email().toLowerCase(),
          phoneNumber: faker.phone.number('+233#########'),
          authProvider: 'firebase',
          role,
          verified: true,
        },
      });
      if (role === UserRole.DRIVER) {
        const dp = await prisma.driverProfile.create({
          data: {
            userId: u.id,
            nationalIdPhotoUrl: faker.image.urlPicsumPhotos(),
            licensePhotoUrl: faker.image.urlPicsumPhotos(),
            kycStatus: KycStatus.APPROVED,
          },
        });
        await prisma.vehicle.create({
          data: {
            driverId: dp.id,
            plateNumber: `GR-${faker.number.int({ min: 1000, max: 9999 })}-${faker.string.alpha(2).toUpperCase()}`,
            make: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            year: faker.number.int({ min: 2012, max: 2024 }),
            seats: faker.number.int({ min: 3, max: 5 }),
            photos: [faker.image.urlPicsumPhotos()]
          }
        })
      }
      await prisma.wallet.create({ data: { userId: u.id, balanceGHS: faker.number.float({ min: 0, max: 200, fractionDigits: 2 }), currency: 'GHS' } });
      return u;
    })
  );

  // Trips (Accra area approx)
  const accraLat = 5.6037;
  const accraLng = -0.1870;

  await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      const creator = faker.helpers.arrayElement(users);
      const latOffset = faker.number.float({ min: -0.05, max: 0.05, fractionDigits: 6 });
      const lngOffset = faker.number.float({ min: -0.05, max: 0.05, fractionDigits: 6 });
      const destLatOffset = faker.number.float({ min: -0.1, max: 0.1, fractionDigits: 6 });
      const destLngOffset = faker.number.float({ min: -0.1, max: 0.1, fractionDigits: 6 });
      return prisma.trip.create({
        data: {
          creatorId: creator.id,
          type: faker.helpers.arrayElement([TripType.OFFERED_BY_DRIVER, TripType.REQUESTED_BY_PASSENGER]),
          originLat: accraLat + latOffset,
          originLng: accraLng + lngOffset,
          originAddress: faker.location.streetAddress({ useFullAddress: true }),
          destinationLat: accraLat + destLatOffset,
          destinationLng: accraLng + destLngOffset,
          destinationAddress: faker.location.streetAddress({ useFullAddress: true }),
          scheduledAt: faker.date.soon({ days: 3 }),
          seatsAvailable: faker.number.int({ min: 1, max: 3 }),
          status: TripStatus.OPEN,
          fareDistanceKm: faker.number.float({ min: 3, max: 30, fractionDigits: 2 }),
          fareDurationMinutes: faker.number.int({ min: 10, max: 120 }),
          fareAmountGHS: faker.number.float({ min: 10, max: 150, fractionDigits: 2 }),
        },
      });
    })
  );

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
