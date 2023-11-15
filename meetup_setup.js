const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  multipleStatements: true,
});

const query = util.promisify(connection.query).bind(connection);

async function createDatabaseAndTables() {
  const createQueries = `
    DROP DATABASE IF EXISTS meetup;
    CREATE DATABASE meetup;
    USE meetup;

    CREATE TABLE Invitee (
      invitee_no INT AUTO_INCREMENT,
      invitee_name VARCHAR(255),
      invited_by VARCHAR(255),
      PRIMARY KEY(invitee_no)
    );

    CREATE TABLE Room (
      room_no INT AUTO_INCREMENT,
      room_name VARCHAR(255),
      floor_number INT,
      PRIMARY KEY(room_no)
    );

    CREATE TABLE Meeting (
      meeting_no INT AUTO_INCREMENT,
      meeting_title VARCHAR(255),
      starting_time DATETIME,
      ending_time DATETIME,
      room_no INT,
      PRIMARY KEY(meeting_no),
      FOREIGN KEY (room_no) REFERENCES Room(room_no)
    );
  `;

  await query(createQueries);
  console.log("Database and tables created.");
}

async function insertSampleData() {
  const insertQueries = `
    INSERT INTO Invitee (invitee_name, invited_by) VALUES 
    ('John Doe', 'Jane Smith'), ...

    INSERT INTO Room (room_name, floor_number) VALUES 
    ('Aquila', 1), ...

    INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES 
    ('Project Kickoff', '2023-11-15 10:00:00', ...);
  `;

  await query(insertQueries);
  console.log("Sample data inserted.");
}

async function main() {
  try {
    await connection.connect();
    console.log("Connected to the MySQL server.");

    await createDatabaseAndTables();
    await insertSampleData();
  } catch (error) {
    console.error("Error: " + error.message);
  } finally {
    connection.end();
  }
}

main();
