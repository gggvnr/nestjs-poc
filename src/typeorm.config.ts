import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.DATABASE_USER || 'admin',
  password: process.env.DATABASE_PASSWORD || 'pass12345',
  database: process.env.DB_NAME || 'nestjs-crud-db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: false,
  logging: true,
  migrationsTableName: 'migration',
  migrations: [
    __dirname + '/migration/**/*.ts',
    __dirname + '/migration/**/*.js',
  ],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migration',
  },
};

export = typeOrmConfig;
