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
		case 'GET':
			//$d = $auth->decryptData(file_get_contents("php://input"));
			switch($req[0]) {
				case "login":
				//	echo $auth->encryptData($auth->userLogin($d));
				break;

				case 'showtoken':
					echo $auth->showToken();
				break;
          //SELECT
				case 'getrecords':
					if (count($req) > 1) {
						echo json_encode($gm->select("DocIssuance_issuedDocs", $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($gm->select("DocIssuance_issuedDocs", null), JSON_PRETTY_PRINT);
					}
				break;
          //INSERT


			}
		break;
    case 'POST':
			//$d = $auth->decryptData(file_get_contents("php://input"));
			switch($req[0]) {
          //INSERT
				case 'newrecord':
					$d = json_decode(file_get_contents("php://input"));
					// $d = json_decode('{ "lastname": "afdsa", "firstname": "QWER", "middlename": "asdasd", "housenum": "adsf", "street": "fasdfa", "purpose": "fasdfa" }');

					echo json_encode($gm->insert("DocIssuance_issuedDocs", $d), JSON_PRETTY_PRINT);
          return array("data"=>$d);
				break;
          //UPDATE
        case 'updaterecord':
					//$d = json_decode(file_get_contents("php://input"));
					$d = json_decode('{"author":"Johncel","title":"Baby ko si Kulot","genre":"Music","price":400}');
					echo json_encode($gm->update("DocIssuance_issuedDocs", $d, "id=501"), JSON_PRETTY_PRINT);
				break;
         //DELETE??


			}
		break;

		default:
			http_response_code(403);
			echo "Please contact the Systems Administrator.";
		break;
	}
