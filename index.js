require("dotenv").config();
const pg = require("pg");
const { Client } = pg;
const { DATABASE_URL } = process.env;

const client = new Client({
  connectionString: DATABASE_URL,
});

async function main() {
  const sqlDeleteStatement =
    "DELETE FROM water_reports WHERE timestamp <= (NOW() - interval '7 days')";

  await client.connect();

  try {
    console.log(`Executing query ${sqlDeleteStatement}`);
    await client.query(sqlDeleteStatement);
    console.log("Query successfully executed");
  } catch (err) {
    console.log(err);
  }

  await client.end();
}

main();
