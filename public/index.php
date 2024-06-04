<?php
	require("login.php");
	if($_COOKIE["loggedin"] === "#") {
		$_COOKIE["loggedin"] = login(new Login());
	}

?>


<!DOCTYPE html>
<html>
	<head>
		<title>PHP Account System</title>	
		<link rel="stylesheet" type="text/css" href="styles/main.css" />

	
	</head>
	
	
	<body>
		<div id="root"></div>
		<script type="text/javascript" src="scripts/client.bundle.js"></script>	
		<script type="text/javascript" src="scripts/render.js"></script>	


	</body>


</html>