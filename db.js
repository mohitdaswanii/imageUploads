const Sequelize = require('sequelize');
const dotenv=require("dotenv")
dotenv.config()
const {POSTGRES_USERNAME,POSTGRES_PASS}=process.env
const sequelize = new Sequelize(POSTGRES_USERNAME, POSTGRES_USERNAME, POSTGRES_PASS, {
  host: 'rosie.db.elephantsql.com',
  dialect:'postgres',
  define:{timestamps:false}
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports=sequelize