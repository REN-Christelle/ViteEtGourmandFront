//Implémenter le JS de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputConfirmPassword = document.getElementById("ConfirmPasswordInput");
const btnInscription = document.getElementById("btn-inscription");
const formInscription = document.getElementById("formulaireInscription");
const inputAdress = document.getElementById("AdresseInput");
const inputCity = document.getElementById("VilleInput");
const inputCountry = document.getElementById("PaysInput");
const inputTelephone = document.getElementById("TelephoneInput");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputAdress.addEventListener("keyup", validateForm);
inputCity.addEventListener("keyup", validateForm);
inputCountry.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputConfirmPassword.addEventListener("keyup", validateForm);
inputTelephone.addEventListener("keyup", validateForm);

btnInscription.addEventListener("click", InscrireUtilisateur);

btnInscription.disabled = true; //désactive le bouton au chargement de la page

//Function permettant de valider tous les champs
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const adressOk = validateRequired(inputAdress);
    const cityOk = validateRequired(inputCity);
    const countryOk = validateRequired(inputCountry);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword,inputConfirmPassword);
    const telephoneOk = validateTelephone(inputTelephone);

    if(nomOk && prenomOk && adressOk && cityOk && countryOk && 
        mailOk && passwordOk && passwordConfirmOk && telephoneOk){
        btnInscription.disabled = false;
    }
    else{
        btnInscription.disabled = true;
    }
}

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPwD, inputConfirmPwd){

    // Si la confirmation est vide : pas de couleur
    if (inputConfirmPwd.value === "") {
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return false;
    }

    // Si la confirmation n'est pas vide, on compare
    if (inputPwD.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}


function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateTelephone(input){
    input.value = input.value.replace(/\D/g, '');

    if(input.value.length === 10) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    }
    else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function InscrireUtilisateur(){
    let dataForm = new FormData(formInscription);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "firstName": dataForm.get("nom"),
        "lastName": dataForm.get("prenom"),
        "email": dataForm.get("email"),
        "password": dataForm.get("mdp"),
        "telephone": dataForm.get("telephone"),
        "adressePostale": dataForm.get("adresse"),
        "city": dataForm.get("ville"),
        "country": dataForm.get("pays")
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(apiUrl+"registration", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            alert("Erreur lors de l'inscription");
        }
    })
    .then(result => {
        alert("Bravo "+dataForm.get("prenom")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
        document.location.href="/connexion";
    })
    .catch(error => console.log('error', error));
}