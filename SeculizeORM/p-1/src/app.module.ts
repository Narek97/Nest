import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as depthLimit from 'graphql-depth-limit';
import { DatabaseModule } from './core/database/database.module';
import { Modules } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: Modules,
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
    ...Modules,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
