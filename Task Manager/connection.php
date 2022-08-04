<?php
    include_once("connection.lib.php");

    $connection = connectToDb("credentials","taskManager");
   
    $array = json_decode(file_get_contents("php://input"));
    if ($array) {
        $username= mysqli_real_escape_string($connection, $array->username);
        $password= mysqli_real_escape_string($connection, $array->password);
    }
    
    $query="SELECT * FROM users";
    $donnees = mysqli_query($connection,$query);
    $num = mysqli_num_rows($donnees);
    if($num > 0)
    {
        $notConnected = true;
        while ($userArray = mysqli_fetch_array($donnees)) {
          
            if ($username == $userArray['username'] && $password == $userArray['password']) {
                $notConnected = false;
                echo "Connected";
                break;
            }
        }
        if($notConnected){
            echo "Not registered yet";
        }
    }
    else {
        echo "No element"; 
    }

    $connection->close();
    ?>