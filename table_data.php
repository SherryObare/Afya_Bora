<!DOCTYPE html>
<html>
<head>
    <title>User Records</title>
    <link rel="stylesheet" href="css/styles_table.css">
</head>
<body>
    <?php
    $conn = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=200303");

    if (!$conn) {
        die("Connection failed: " . pg_last_error());
    }

    $sql = "SELECT * FROM patients";
    $result = pg_query($conn, $sql);

    if (!$result) {
        echo "Error: " . pg_last_error($conn);
        exit;
    }

    echo "<table>";

    echo "<tr>";
    echo "<th>PatientID</th>";
    echo "<th>First Name</th>";
    echo "<th>Last Name</th>";
    echo "<th>Surname</th>";
    echo "<th>Gender</th>";
    echo "<th>County</th>";
    echo "<th>Date of Birth</th>";
    echo "</tr>";
    // Loop through the result set and generate table data rows
    while ($row = pg_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['f_name'] . "</td>";
        echo "<td>" . $row['m_name'] . "</td>";
        echo "<td>" . $row['surname'] . "</td>";
        echo "<td>" . $row['gender'] . "</td>";
        echo "<td>" . $row['county'] . "</td>";
        echo "<td>" . $row['dob'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";

    pg_close($conn);
    ?>
</body>
</html>