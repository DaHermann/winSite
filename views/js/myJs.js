
// 


require('app.js')
// FORMULAIRE D'INSCRIPTION
var form = document.getElementById("form_inscription");
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var pwd_conf = document.getElementById("pwd_conf");
var select = document.getElementById("select");
var homme = document.getElementById("homme");
var femme = document.getElementById("femme");
var erreur = document.getElementById("erreur");
var erreurNom = document.getElementById("erreur-nom");
var erreuPrenom = document.getElementById("erreur-prenom");
var erreurMail = document.getElementById("erreur-mail");
var erreurPwd = document.getElementById("erreur-pwd");
var erreurProfile = document.getElementById("erreur-profile");
var erreurSexe = document.getElementById("erreur-sexe");
var erreurTel = document.getElementById("erreur-tel");


// verification de mot de passe
pwd_conf.addEventListener("input", function() {

    if (this.value != pwd.value) {

        erreurPwd.innerHTML = "les mot de passe ne corresponde pas !";

    }else {
        erreurPwd.innerHTML = "";
    }
})

var recup_sbmit_glob = form.addEventListener("submit",function(e){
    var inputs = this;
    var erreurCall;

    if (!inputs['nom'].value) {
        erreurNom.innerHTML = "Entrez votre nom !";
    }

    if (!inputs['prenom'].value) {
        erreuPrenom.innerHTML = "Entrez votre prénom svp !";
    }

    if (!inputs['email'].value) {
        erreurMail.innerHTML = "Entrez votre email svp !";
    }

    if (!inputs['pwd'].value || !inputs['pwd_conf'].value) {
        erreurPwd.innerHTML = "Entrez votre mot de passe et confimez le svp !"; 
    }

    if (!inputs['tel'].value) {

        erreurTel.innerHTML = "Entrez votre numero de telephone svp !";
    }

    if (!inputs['sexe'].value) {

        erreurSexe.innerHTML = "Entrez votre sexe svp !";
    }

    for (var i = 0; i < inputs.length; i++) {

        if (!inputs[i].value) {
            if (inputs['selection'].value == "...") {
                
                erreurProfile.innerHTML = "Entrez votre profile svp !";
            }
            erreurCall = "Tout les champs doivent etre renseigné !";
        }
    }

    if (erreurCall) {

        e.preventDefault();
        erreur.innerHTML = erreurCall;
        return false;
    }else{

        alert('formulaire envoyé !');


        bd.connect((err) => {

            if (err) {

                console.log(err.message)
            }else {
                console.log('connected.')

                // server.set('views', path.join(__dirname, 'views'));
                server.get('/',function(req, res){

                    res.render('inscription.twig');

                });
                   
                    server.post('/', function(req, res) {

                            if (err) {

                                console.log(err.message)
                            }else {
                                console.log('connected.');

                            var sql = "INSERT INTO members (nom, prenom, email, mot_pass, profile, tel, sexe) VALUES (inputs['nom'].value, inputs['prenom'].value, inputs['email'].value, inputs['pwd'].value,inputs['selection'].value,  inputs['tel'].value, inputs['sexe'].value)";

                            bd.query(sql, function (err, res) {  
                            if (err) throw err;  
                            res.
                            console.log(err.message);  
                            res.redirect('index.twig')
                            });
                            }

                    });

               }
         
        })


    }
} )