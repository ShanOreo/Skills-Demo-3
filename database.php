<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server name
$username = "root"; // Change this to your database username
$password = "password"; // Change this to your database password
$database = "bruh"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to retrieve data
$sql = "SELECT * FROM user"; // Change 'your_table' to your actual table name

// Execute the query
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Display results in a table
    echo "<h2>Results displayed in a table:</h2>";
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Name</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"] . "</td><td>" . $row["name"] . "</td></tr>";
        // Add more columns as needed
    }
    echo "</table>";

    // Display results in a list
    echo "<h2>Results displayed in a list:</h2>";
    echo "<ul>";
    // Reset the result pointer to the beginning
    $result->data_seek(0);
    while($row = $result->fetch_assoc()) {
        echo "<li>ID: " . $row["id"] . ", Name: " . $row["name"] . "</li>";
        // Add more items as needed
    }
    echo "</ul>";
} else {
    echo "0 results";
}

// Close the connection
$conn->close();
?>
