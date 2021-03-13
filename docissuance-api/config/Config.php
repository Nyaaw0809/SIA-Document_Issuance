<?php
	//include headers
	header("Access-Control-Allow-Origin: *"); //for client devices (e.g. mobile apps)
	header("Content-Type: application/json; charset=utf-8");
	header("Access-Control-Allow-Methods: POST");
	header("Access-Control-Max-Age: 3600"); //for sessions
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Auth-User");

	// ini_set('display_errors', '0'); //ini_set = overwriting the php.ini config; commented during development, uncommented during production
	date_default_timezone_set("Asia/Manila");
	set_time_limit(1000);

	//include php files to create API
	require_once("./models/Global.php"); //reusable
	require_once("./models/Auth.php"); //reusable
	require_once("./models/Get.php");
	require_once("./models/Post.php");

	//definitions
	define("DBASE", "db_sample");
	define("USER", "root");
	define("PW", "");
	define("SERVER", "localhost");
	define("CHARSET", "utf8");
	define("SECRET", base64_encode("sampleSecretKey"));
	
	//setting up PDO connection
	class Connection {
		protected $constring = "mysql:host=".SERVER.";dbname=".DBASE.";charset=".CHARSET; //designed for MySQL
		protected $options = [
			\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION, //handles errors
			\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC, //key value pairing; by default
			\PDO::ATTR_EMULATE_PREPARES => false //protection from SQL injection
			//can be changed if you will migrate
		];

		public function connect() {
			return new \PDO($this->constring, USER, PW, $this->options);
		}
	}
?>