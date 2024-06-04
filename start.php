<?php
	require($_SERVER["DOCUMENT_ROOT"] . "source/application/server/server.php");


	function start($sInstance) {
		$sInstance->init();	
		$sInstance->run();
	}


	start(new Server());
?>