import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  create(data: {
    creatorId: string;
    type: 'OFFERED_BY_DRIVER' | 'REQUESTED_BY_PASSENGER';
    origin: { lat: number; lng: number; address: string };
    destination: { lat: number; lng: number; address: string };
    scheduledAt: string;
    seats: number;
  }) {
    return this.prisma.trip.create({
      data: {
        creatorId: data.creatorId,
        type: data.type,
        originLat: data.origin.lat,
        originLng: data.origin.lng,
        originAddress: data.origin.address,
        destinationLat: data.destination.lat,
        destinationLng: data.destination.lng,
        destinationAddress: data.destination.address,
        scheduledAt: new Date(data.scheduledAt),
        seatsAvailable: data.seats,
        fareDistanceKm: 0,
        fareDurationMinutes: 0,
        fareAmountGHS: 0,
      },
    });
  }

  search(params: { originLat: number; originLng: number; radiusKm: number; scheduledAt?: string }) {
    const { originLat, originLng, radiusKm } = params;
    const latDeg = radiusKm / 111;
    const lngDeg = radiusKm / (111 * Math.cos((originLat * Math.PI) / 180));
    return this.prisma.trip.findMany({
      where: {
        status: 'OPEN',
        originLat: { gte: originLat - latDeg, lte: originLat + latDeg },
        originLng: { gte: originLng - lngDeg, lte: originLng + lngDeg },
      },
      take: 50,
      orderBy: { createdAt: 'desc' },
    });
  }
}
