<?php
	class Auth {
		protected $gm, $pdo;

		public function __construct(\PDO $pdo) {
			$this->gm = new GlobalMethods($pdo);
			$this->pdo = $pdo;
		}

		protected function generateHeader() {
			$h = [
				"type"=>"JWT",
				"alg"=>"HS256",
				"app"=>"My System",
				"dev"=>"The Developer"
			];
			return base64_encode(json_encode($h));
		}

		protected function generatePayload($uc, $ue, $ito) {
			$p = [
				"uc"=>$uc,
				"ue"=>$ue,
				"ito"=>$ito,
				"iby"=>"The Developer",
				"ie"=>"thedevelopers@test.com",
				"exp"=>date("Y-m-d H:i:s")
			];
			return base64_encode(json_encode($p));
		}

		protected function generateToken($usercode, $useremail, $fullname) {
			$header = str_replace("=", "",$this->generateHeader());
			$payload = str_replace("=", "", $this->generatePayload($usercode, $useremail, $fullname));
			$signature = hash_hmac("sha256", "$header.$payload", base64_encode(SECRET));
			return "$header.$payload.".base64_encode($signature);
		}

		public function showToken() {
			return $this->generateToken("200210100","200210100@test.com","Juan Dela Cruz");
		}
	}
?>
