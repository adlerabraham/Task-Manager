<?php
    include_once("../common/connection.lib.php");

    $connection = connectToDb("../common/credentials","taskManager");
   
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
        $notRegistered = true;
        while ($userArray = mysqli_fetch_array($donnees)) {
          
            if ($username == $userArray['username']) {
                $notRegistered = false;
                echo "Existed\n";
                break;
            }
        }
        if($notRegistered){
            echo "Not registered yet\n";
        }
    }
    else {
        echo "No element\n"; 
    }
    if($num <= 0 || $notRegistered)
    {
        $query2 = "INSERT INTO users(username,userPassword) VALUES('$username','$password')";
        $result = mysqli_query($connection,$query2)or die("Error: ".mysqli_error($connection));
       
        if($result){
            echo "Completed \n";
        }
        else{
            echo $result+"\n";
        }
        
        
    }

    $connection->close();
    ?>