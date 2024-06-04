<?php	
	class Server {	
		function run() {
			session_start();
			header("Location: /", 200, true);	
			
			
			die();
		}	
		
		
		function init() {
			exec("echo 'Compiling server scripts... '");
			
			
			exec("npm run compile-scripts --prefix ./source/application/server/scripts/");
			exec("npm run run-script-open --prefix ./source/application/server/scripts/");
			
			
			exec("echo 'Done... '");
			exec("php -S localhost:" . 4091 . " -t " . $_SERVER["DOCUMENT_ROOT"] . "public/");
		}
		
	}

?>