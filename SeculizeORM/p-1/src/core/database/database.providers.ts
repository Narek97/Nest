import { databaseConfig } from './database.config';
import { models } from './models';
import { Sequelize } from 'sequelize-typescript';

let sequelize;
(async () => {
  let config;

  switch (process.env.NODE_ENV) {
    case 'development':
      config = databaseConfig.development;
      break;
    case 'test':
      config = databaseConfig.test;
      break;
    case 'production':
      config = databaseConfig.production;
      break;
    default:
      config = databaseConfig.development;
  }

  config.models = models;

  sequelize = new Sequelize(config);
  await sequelize.authenticate();
})();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      return sequelize;
    },
  },
];
