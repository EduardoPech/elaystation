import mysql from "serverless-mysql";

export const dbSensors = mysql({
  config: {
    host: process.env.SENSORS_MYSQL_HOST,
    database: process.env.SENSORS_MYSQL_DATABASE,
    user: process.env.SENSORS_MYSQL_USER,
    password: process.env.SENSORS_MYSQL_PASSWORD,
  },
  library: require("mysql2"),
});

export const dbUsers = mysql({
  config: {
    host: process.env.USERS_MYSQL_HOST,
    database: process.env.USERS_MYSQL_DATABASE,
    user: process.env.USERS_MYSQL_USER,
    password: process.env.USERS_MYSQL_PASSWORD,
  },
  library: require("mysql2"),
});