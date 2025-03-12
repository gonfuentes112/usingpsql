#! /usr/bin/env node
if (process.argv.length < 3) {
  console.log("not enough arguments");
  return
}
const dbstring = process.argv[2];
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: dbstring,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
