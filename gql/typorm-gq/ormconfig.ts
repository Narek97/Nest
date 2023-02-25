import * as path from 'path';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(
  process.cwd(),
  `.${process.env.NODE_ENV || 'development'}.env`,
);
dotenv.config({ path: dotenv_path });

export const OrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  // entities: ['dist/src/modules/**/*.entity.{ts,js}'],
  // migrations: ['dist/src/migrations/*.{ts,js}'],
  entities: [__dirname + 'src/modules/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/src/migrations/*.{ts,js}'],
  synchronize: true,
  migrationsRun: true,
  cli: {
    entitiesDir: 'src/modules/**/*.entity.{ts,js}',
    migrationsDir: 'src/migrations',
  },
  logging: false,
};

export default OrmConfig;
