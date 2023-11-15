## MySQL Commands

### Accessing MySQL
- **Log In**: `mysql -u [username] -p` (replace `[username]` with your MySQL username).

### Basic Database Operations
- **List Databases**: `SHOW DATABASES;`
- **Select Database**: `USE [database];`
- **List Tables**: `SHOW TABLES;`
- **Describe Table**: `DESCRIBE [table];`

### Data Manipulation
- **Select Records**: `SELECT * FROM [table];`
- **Insert Data**: `INSERT INTO [table] VALUES ([value1], [value2], ...);`
- **Update Data**: `UPDATE [table] SET [column] = '[value]' WHERE [condition];`
- **Delete Data**: `DELETE FROM [table] WHERE [condition];`

### Exiting MySQL
- **Exit Command Line**: `EXIT;`

## Node.js Commands

### Running Node.js Applications
- **Run Program**: `node [filename]` (replace `[filename]` with your JavaScript file name).

### Node.js Package Management
- **Initialize Project**: `npm init`
- **Install Package**: `npm install [package]`
- **Update Package**: `npm update [package]`
- **Start Script**: `npm start`
- **Run Script**: `npm run [script]`
- **Run Tests**: `npm test`

### Checking Versions
- **Node.js Version**: `node -v`
- **npm Version**: `npm -v`

### Using npx
- **Run Package**: `npx [package]`

## Detailed MySQL Commands Guide for macOS


# MySQL Commands and Explanations

A comprehensive guide to common MySQL commands, ideal for sharing with teams or for quick reference.

## Starting and Stopping MySQL

### Starting MySQL Server
- **Linux**: `sudo service mysql start`
- **Windows**: Open MySQL from the Start menu.

### Stopping MySQL Server
- **Linux**: `sudo service mysql stop`
- **Windows**: Use the MySQL Workbench or stop the service from the Services application.

### Accessing MySQL Prompt
- **Command**: `mysql -u root -p`
- **Explanation**: Logs in to MySQL as the root user. You'll be prompted to enter the root password.

## Database Operations

### Create Database
- **Command**: `CREATE DATABASE database_name;`
- **Explanation**: Creates a new database named `database_name`.

## Table Operations

### Create Table
- **Command**: `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);`
- **Explanation**: Creates a new table with defined columns and data types.

### Creating a Table with Constraints
- **Example**: 
  ```
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```
- **Explanation**: Creates a 'users' table with an auto-incrementing ID, name, email, and timestamp.

### Create Index
- **Command**: `CREATE INDEX index_name ON table_name (column_name);`
- **Explanation**: Adds an index to a table column to improve data retrieval speed.

## Altering Tables

### Adding a Column
- **Command**: `ALTER TABLE table_name ADD column_name datatype;`
- **Explanation**: Adds a new column to a table.

### Modifying a Column
- **Command**: `ALTER TABLE table_name MODIFY COLUMN column_name new_datatype;`
- **Explanation**: Changes the data type of a table column.

### Dropping a Column
- **Command**: `ALTER TABLE table_name DROP COLUMN column_name;`
- **Explanation**: Removes a column from a table.

## Dropping Structures

### Drop Table
- **Command**: `DROP TABLE table_name;`
- **Explanation**: Completely removes a table and its data.

### Drop Database
- **Command**: `DROP DATABASE database_name;`
- **Explanation**: Deletes a database and all its contents.

## Miscellaneous

### Show Tables
- **Command**: `SHOW TABLES;`
- **Explanation**: Lists all tables in the current database.

### Describe Table Structure
- **Command**: `DESCRIBE table_name;`
- **Explanation**: Shows the structure of a table including column details.
