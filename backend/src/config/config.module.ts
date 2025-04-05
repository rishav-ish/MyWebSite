import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule, ConfigService as NestConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { ConfigService } from './config.service';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local', `.env.${process.env.NODE_ENV}`],
      expandVariables: true,
      cache: true,
      validationSchema: configValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  providers: [
    {
      provide: ConfigService,
      useFactory: (configService: NestConfigService) => {
        return new ConfigService(configService);
      },
      inject: [NestConfigService],
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {} 