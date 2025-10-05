import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { HealthController } from '../health/health.controller';
import { AuthModule } from '../auth/auth.module';
import { TripsModule } from '../trips/trips.module';

@Module({
  imports: [AuthModule, TripsModule],
  controllers: [AppController, HealthController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

