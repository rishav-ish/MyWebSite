import { Injectable, Logger } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);
  
  constructor(private configService: NestConfigService) {
    // Log all important environment variables for debugging
    this.logger.log(`NODE_ENV: ${this.nodeEnv}`);
    this.logger.log(`DATABASE_URL: ${this.databaseUrl}`);
    this.logger.log(`PORT: ${this.port}`);
    this.logger.log(`CORS_ORIGIN: ${this.corsOrigin}`);
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }

  get port(): number {
    return this.configService.get<number>('PORT');
  }

  get databaseUrl(): string {
    const url = this.configService.get<string>('DATABASE_URL');
    this.logger.debug(`Raw DATABASE_URL from env: "${url}"`);
    
    // Check if URL is a PostgreSQL connection string
    if (url && url.startsWith('postgres://')) {
      this.logger.warn(`Found PostgreSQL URL but MongoDB is required. Using default MongoDB connection.`);
      return 'mongodb://localhost:27017/resume';
    }
    
    // Ensure URL starts with mongodb:// or mongodb+srv://
    if (url && !url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) {
      this.logger.warn(`DATABASE_URL does not start with mongodb:// or mongodb+srv:// prefix: ${url}`);
      return `mongodb://${url}`;
    }
    
    return url;
  }

  get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  get corsOrigin(): string {
    return this.configService.get<string>('CORS_ORIGIN');
  }
}