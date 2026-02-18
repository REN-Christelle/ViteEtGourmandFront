const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btn-connexion");
const connexionForm = document.getElementById("connexionForm");
const overlay = document.getElementById("loadingOverlay");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    // afficher overlay de connexion
    overlay.classList.remove("d-none");
    btnConnexion.disabled = true;
    
    let dataForm = new FormData(connexionForm);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("mdp"),
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then(result => {
        const token = result.apiToken; //Récupère le token
        setToken(token); //Placer ce token en cookie
        setCookie(roleCookieName, result.roles[0], 7);
        window.location.replace("/");
        console.log(result);
    })
    .catch(error => console.log('error', error));
}

