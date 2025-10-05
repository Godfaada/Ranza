import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private readonly trips: TripsService) {}

  @Post()
  create(@Body() body: any) {
    return this.trips.create({
      creatorId: body.creatorId,
      type: body.type,
      origin: body.origin,
      destination: body.destination,
      scheduledAt: body.scheduledAt,
      seats: body.seats,
    });
  }

  @Get()
  search(
    @Query('originLat') originLat: string,
    @Query('originLng') originLng: string,
    @Query('radiusKm') radiusKm: string,
  ) {
    return this.trips.search({
      originLat: Number(originLat),
      originLng: Number(originLng),
      radiusKm: Number(radiusKm || 10),
    });
  }
}
