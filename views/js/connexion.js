
// FORMULAIRE DE CONNEXION

var form_conn = document.getElementById("form_conn");
var error = document.getElementById("error");
var email_error = document.getElementById("email_error");
var pwd_error = document.getElementById("pwd_error");

 form_conn.addEventListener("submit",function(e){
	var inputs_conn = this;
	var errorCall;

	if (!this['email_conn'].value) {
		email_error.innerHTML = "<i>Entrez votre mot de passe et confimez le svp !</i>";	
	}

	if (!this['pwd_conn'].value) {

		pwd_error.innerHTML = "<i>Entrez votre mot de passe svp !</i>";
	}

	for (var i = 0; i < this.length; i++) {

		if (!this[i].value) {

			errorCall = "<i>Tout les champs doivent etre renseigné !</i>";
		}
	}

	if (errorCall) {

		e.preventDefault();
		error.innerHTML = errorCall;
		return false;
	}else{

		alert('Connected !');
	}

})
