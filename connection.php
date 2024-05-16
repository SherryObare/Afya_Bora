<?php

var_dump($_POST);
ini_set('display_errors', 1);
error_reporting(E_ALL);
$host = "localhost";
$port = "5432"; 
$dbname = "postgres";
$user = "postgres";
$password = "200303";

// Create new connection
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Check connection
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

$id = $_POST['id'];
$f_name = $_POST['f_name'];
$m_name = $_POST['m_name'];
$surname = $_POST['surname'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$county = $_POST['county'];

$sql = "INSERT INTO patients (id, f_name, m_name, surname, gender, county, dob) 
VALUES ('$id', '$f_name', '$m_name', '$surname', '$gender', '$county', '$dob')";
#VALUES ($1, $2, $3, $4, $5, $6, $7)";
#$stmt = pg_prepare($conn, "insert_patient", $sql);
#bind parameters
#$stmt = pg_execute($conn, "insert_patient", array($id, $f_name, $m_name, $surname, $gender, $county, $dob));
$result = pg_query($conn, $sql);

if ($result) {
    echo "Data saved successfully";
} else {
    echo "Error: " . pg_last_error($conn);
}

pg_close($conn);
?>