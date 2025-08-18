import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';
import * as dotenv from 'dotenv';
import 'reflect-metadata'; // necessário para class-validator funcionar

dotenv.config();

class EnvironmentVariables {
  @IsNumber()
  PORT: number;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  DATABASE_URL: string;
}

const envVars = plainToInstance(EnvironmentVariables, {
  PORT: Number(process.env.PORT),
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
});

const errors = validateSync(envVars, {
  skipMissingProperties: false,
});

if (errors.length > 0) {
  console.error('❌ Erro nas variáveis de ambiente:', errors);
  process.exit(1);
}

export const env = envVars;
