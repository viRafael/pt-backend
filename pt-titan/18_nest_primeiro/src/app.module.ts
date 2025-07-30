import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/module/user/user.module';

// Decoretor
@Module({ 
  imports: [UserModule, UserModule],
  controllers: [],
  providers: [], // Injeta Dependencias
})
export class AppModule {}
