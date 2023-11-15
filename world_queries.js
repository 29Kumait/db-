const mysql = require("mysql");
const util = require("util");

// Setup MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "log_username",
  password: "password_key",
  database: "world",
});

// Promisify the query function
const query = util.promisify(connection.query).bind(connection);

// Functions for each query
async function getCountriesWithPopulationOver8Million() {
  const result = await query(
    "SELECT Name FROM country WHERE Population > 8000000"
  );
  console.log("Countries with population over 8 million:", result);
}

async function getCountriesWithLand() {
  const result = await query(
    "SELECT Name FROM country WHERE Name LIKE '%land%'"
  );
  console.log("Countries with 'land' in their name:", result);
}

async function getCitiesPopulation500Kto1M() {
  const result = await query(
    "SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000"
  );
  console.log("Cities with population between 500,000 and 1 million:", result);
}

async function getEuropeanCountries() {
  const result = await query(
    "SELECT Name FROM country WHERE Continent = 'Europe'"
  );
  console.log("Countries in Europe:", result);
}

async function getCountriesByDescendingArea() {
  const result = await query(
    "SELECT Name FROM country ORDER BY SurfaceArea DESC"
  );
  console.log("Countries in descending order of surface area:", result);
}

async function getCitiesInNetherlands() {
  const result = await query("SELECT Name FROM city WHERE CountryCode = 'NLD'");
  console.log("Cities in the Netherlands:", result);
}

async function getPopulationOfRotterdam() {
  const result = await query(
    "SELECT Population FROM city WHERE Name = 'Rotterdam'"
  );
  console.log("Population of Rotterdam:", result);
}

async function getTop10CountriesBySurfaceArea() {
  const result = await query(
    "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10"
  );
  console.log("Top 10 countries by surface area:", result);
}

async function getTop10PopulatedCities() {
  const result = await query(
    "SELECT Name FROM city ORDER BY Population DESC LIMIT 10"
  );
  console.log("Top 10 most populated cities:", result);
}

async function getWorldPopulation() {
  const result = await query(
    "SELECT SUM(Population) as WorldPopulation FROM country"
  );
  console.log("World population:", result);
}

// Main function to execute the queries
async function main() {
  try {
    await connection.connect();
    console.log("Connected to the world database.");

    await getCountriesWithPopulationOver8Million();
    await getCountriesWithLand();
    await getCitiesPopulation500Kto1M();
    await getEuropeanCountries();
    await getCountriesByDescendingArea();
    await getCitiesInNetherlands();
    await getPopulationOfRotterdam();
    await getTop10CountriesBySurfaceArea();
    await getTop10PopulatedCities();
    await getWorldPopulation();
  } catch (error) {
    console.error("Error: " + error.message);
  } finally {
    connection.end();
  }
}

main();
