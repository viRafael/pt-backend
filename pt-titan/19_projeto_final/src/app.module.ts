import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [UserModule, MealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
