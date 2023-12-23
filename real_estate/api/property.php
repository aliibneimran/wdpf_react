<?php
require 'db_connection.php';
	$allProperty = $db->query("SELECT * FROM property JOIN types ON property.type_id = types.t_id");
		if(mysqli_num_rows($allProperty) > 0){
			while($row = $allProperty->fetch_array()){
				$viewjson["id"] = $row['id'];
				$viewjson["title"] = $row['title'];
				$viewjson["description"] = $row['description'];
				$viewjson["category_id"] = $row['category_id'];
				$viewjson["type"] = $row['type'];
				$viewjson["status_id"] = $row['status_id'];
				$viewjson["size"] = $row['size'];
				$viewjson["bed"] = $row['bed'];
				$viewjson["bath"] = $row['bath'];
				$viewjson["floor"] = $row['floor'];
				$viewjson["price"] = $row['price'];
				$viewjson["photo"] = $row['photo'];
				$viewjson["utility"] = $row['utility'];
				$viewjson["interior"] = $row['interior'];
				$viewjson["outdoor"] = $row['outdoor'];
				$viewjson["address"] = $row['address'];
				$viewjson["city"] = $row['city'];
				$viewjson["country"] = $row['country'];
				$viewjson["zip"] = $row['zip'];
// 	title 	description 	category_id 	type_id 	status_id 	size 	bed 	bath 	floor 	price 	photo 	utility 	interior 	outdoor 	address 	city 	country 	zip 	
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"property"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 