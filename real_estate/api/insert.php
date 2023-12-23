<?php 
require 'db_connection.php';

$abc = json_decode(file_get_contents("php://input"));

if(isset($abc->data->name) && !empty(trim($abc->data->name)) && isset($abc->data->email) && !empty(trim($abc->data->email))){
    $name = $abc->data->name;
    $email = $abc->data->email;
    
    $sql = "INSERT INTO user VALUES(NULL,'$name','$email',now())";
    $db->query($sql);
    if($db->affected_rows>0){
        echo json_encode(["success"=>true,"msg"=>"Data entry is successfull"]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    }
}else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?> 
