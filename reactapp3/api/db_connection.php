<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db= new mysqli("localhost", "root", "", "reactapp3");

// Check connection
if($db === false){
    die("ERROR: Could not connect. " . $db->error());
}
error_reporting(E_ALL);
// ini_set('display_errors','Off');
?> 