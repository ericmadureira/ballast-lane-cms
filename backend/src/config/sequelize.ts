import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'cmsdb',
  process.env.DB_USER || 'admin',
  process.env.DB_PASS || 'admin',
  {
    host: process.env.DB_HOST || 'cms_db',
    dialect: 'postgres',
  }
);

export default sequelize;
