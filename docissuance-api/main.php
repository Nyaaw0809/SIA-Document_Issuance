<?php
	require_once("./config/Config.php");

	$db = new Connection();
	$pdo = $db->connect();
	$gm = new GlobalMethods($pdo);
	$auth = new Auth($pdo);

	if(isset($_REQUEST['request'])) {
		$req = explode('/', rtrim(base64_decode($_REQUEST['request']), '/'));
	}
	else {
		$req = array("errorcatcher");
	}

	switch($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			//$d = $auth->decryptData(file_get_contents("php://input"));
			switch($req[0]) {
				case "login":
					echo $auth->encryptData($auth->userLogin($d));
				break;

				case 'showtoken':
					echo $auth->showToken();
				break;
			}
		break;

		default:
			http_response_code(403);
			echo "Please contact the Systems Administrator.";
		break;
	}

?>