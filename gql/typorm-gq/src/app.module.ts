import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from '../ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import * as depthLimit from 'graphql-depth-limit';

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [BookModule],
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: '/',
      debug: false,
      playground: true,
      validationRules: [depthLimit(5)],
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
        numberScalarMode: 'integer',
        noDuplicatedFields: true,
      },
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
