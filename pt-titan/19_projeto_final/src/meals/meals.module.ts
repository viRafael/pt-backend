import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [MealsController],
  providers: [MealsService, PrismaService],
})
export class MealsModule {}
