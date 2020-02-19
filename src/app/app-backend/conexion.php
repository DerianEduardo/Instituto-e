<?php 
	$host="localhost";
	$dbname="sispaz";
	$usuario="root";
	$pass="";

	try
	{
		$pdo=new PDO("mysql:host=$host;dbname=$dbname;charset=utf8",$usuario,$pass);
		//echo "Conexion buena";
	}
	catch(PDOException $ex)
	{
		echo $ex->getMessage();
	}
 ?>