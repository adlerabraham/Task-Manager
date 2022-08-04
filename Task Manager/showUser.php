<?php
    include_once("connexion.php");

    $connection = connectToDb("credentials","taskManager");
   
    $query="SELECT * FROM users";
    $donnees = mysqli_query($connection,$query);
    $num = mysqli_num_rows($donnees);
    ?>
     <h1>Users</h1>

     <?php

    if($num > 0)
    {
        while ($userArray = mysqli_fetch_array($donnees)) {
            ?>
             <?php echo $userArray['username']; 
            echo "</br>";
        }
    }
    else {
        echo "No element"; 
    }

    $connection->close();
?>