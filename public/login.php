<?php
    class Login {
        function checkCredentials() {
            if($_COOKIE["usr"] === "1234" && 
                $_COOKIE["pss"] === "1234") {
                setcookie("loggedin", "logged in");
                header("Refresh: 0");
            }

        }
    
    }   


    function login($session) {
        return $session->checkCredentials();
    } 
    
?>