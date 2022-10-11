<?php 
    //Function that start connection to databse
    //$base: databse name, $param: folder name for connexion parameters

    function connectToDb($param,$base){
        include_once($param.".inc.php");
        $connection = mysqli_connect(HOST,USER,PASSWORD,$base);
        if(!$connection)
        {
            echo "<script type=text/javascript>";
            echo "alert('La Connexion a la base a echoue')</script>";
        }
        return $connection;

    }

?>