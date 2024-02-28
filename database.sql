-- Create a new database
CREATE DATABASE bruh;

-- Switch to the newly created database
USE bruh;

-- Create a table named 'users' with columns 'id', 'name', and 'email'
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL

    -- Insert sample data into the 'users' table
INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com');

);
