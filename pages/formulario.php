<?php
//validamos datos del servidor
$user = "root";
$pass = "password";
$host = "localhost";

//conetamos al base datos
$connection = mysqli_connect($host, $user, $pass);

//hacemos llamado al imput de formuario
$nombre = $_POST["name"] ;
$email = $_POST["email"] ;
$comentario = $_POST["text"] ;

//verificamos la conexion a base datos
if(!$connection) 
        {
            echo ("No se ha podido conectar con el servidor" . mysqli_conncect_error());
        }
  else
        {
            echo "<b><h3>Hemos conectado al servidor</h3></b>" ;
            $datab = "legend_of_elda";
        //indicamos selecionar ala base datos
        $db = mysqli_select_db($connection,$datab);

        //insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
        $instruccion_SQL = "INSERT INTO sugerencias (nombre, email, comentario)
                             VALUES ('$nombre','$email','$comentario')";
                           
                            
        $resultado = mysqli_query($connection,$instruccion_SQL);
        header("Location:./sugerencias.html");
        }
        


?>