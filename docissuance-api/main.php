<?php
require_once("./config/Config.php");

$db = new Connection();
$pdo = $db->connect();
$gm = new GlobalMethods($pdo);
$auth = new Auth($pdo);

if (isset($_REQUEST['request'])) {
  $req = explode('/', rtrim(base64_decode($_REQUEST['request']), '/'));
} else {
  $req = array("errorcatcher");
}

switch ($_SERVER['REQUEST_METHOD']) {


  case 'POST':
    switch ($req[0]) {
        //SELECT
      case 'getrecords':
        if (count($req) > 1) {
          echo json_encode($gm->select("tbl_residents INNER JOIN tbl_documents ON tbl_residents.res_id=tbl_documents.res_id INNER JOIN tbl_doctype ON tbl_doctype.doc_type_id=tbl_documents.doc_type_id
          ", $req[1]), JSON_PRETTY_PRINT);
        } else {
          echo json_encode($gm->select("tbl_residents INNER JOIN tbl_documents ON tbl_residents.res_id=tbl_documents.res_id INNER JOIN tbl_doctype ON tbl_doctype.doc_type_id=tbl_documents.doc_type_id
          ", null), JSON_PRETTY_PRINT);
        }

        break;

        //CHECK IF RESIDENT
        case 'checkres':
          if (count($req) > 1) {
            echo json_encode($gm->select("tbl_residents", $req[0]), JSON_PRETTY_PRINT);
          } else {
            echo json_encode($gm->select("tbl_residents", null), JSON_PRETTY_PRINT);
          }


          break;

        //INSERT
      case 'newrecord':
        $d = json_decode(file_get_contents("php://input"));
        echo json_encode($gm->insert("tbl_documents", $d), JSON_PRETTY_PRINT);
        return array("data" => $d);
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
