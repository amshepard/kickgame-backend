/*
Here we are establishing a PostgreSQL database connection  using the 'pg-promise' library. We import the necessary libraries, then configure a connection object using environment variables (retrieved from a .env file using dotenv). Finally, a database instance is created using the configured connection, and this instance is exported for use in other parts of the application.
*/

// Import the 'pg-promise' library
const pgp = require("pg-promise")();
// Import and configure 'dotenv' to load environment variables from a file
require("dotenv").config();

// Create a connection configuration object using environment variables
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

// Create a database instance using the 'pg-promise' library and the connection configuration
const db = pgp(cn);

// Export the created database instance
module.exports = db;
