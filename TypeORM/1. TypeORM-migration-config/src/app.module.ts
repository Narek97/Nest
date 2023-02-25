import { Module } from '@nestjs/common';
import OrmConfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
    }),
    TypeOrmModule.forRoot({
      ...OrmConfig,
      autoLoadEntities: true,
    }),
    UsersModule,
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
