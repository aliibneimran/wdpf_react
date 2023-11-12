<?php 
require 'db_connection.php';

$abc = json_decode(file_get_contents("php://input"));
// if(isset($abc->name)){
    $name = $abc->data->name;
    $email = $abc->data->email;
    
    $sql = "INSERT INTO user VALUES(NULL,'$name','$email',now())";
    $db->query($sql);
    if($db->affected_rows>0){
        echo "Success";
    }else{
        echo "Problem";
    }
// }
?> 
