const tokenCookieName = "accesstoken";
const btnDeconnexion = document.getElementById("btn-deconnexion");
const roleCookieName = "role";
const apiUrl = "http://127.0.0.1:8000/api/";
btnDeconnexion.addEventListener("click", deconnexion);

function getRole(){
    return getCookie(roleCookieName);
}

function deconnexion(){
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.reload();
}

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected(){
    if(getToken() == null || getToken() == undefined){
        return false;
    }
    else{
        return true;
    }
}

/* les différents utilisateurs
disconnected (visteur pas connecté)
connected
    - admin
    - employé
    - client
*/
function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != "ROLE_ADMIN"){
                    element.classList.add("d-none");
                }
                break;
            case 'employe':
                if(!userConnected || role != "ROLE_EMPLOYEE"){
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || role != "ROLE_USER"){
                    element.classList.add("d-none");
                }
                break;
        }
    })
}

//Bouton +/- ajout quantité
function initOrderQuantity() {
  const minPersEl = document.getElementById("minPers");
  const qtyValueEl = document.getElementById("qtyValue");
  const minusBtn = document.getElementById("minusBtn");
  const plusBtn = document.getElementById("plusBtn");

  // Si on n'est pas sur une page qui contient ce composant : ne rien faire
  if (!minPersEl || !qtyValueEl || !minusBtn || !plusBtn) return;

  const minPers = parseInt(minPersEl.textContent, 10);
  let qty = parseInt(qtyValueEl.textContent, 10);

  if (isNaN(qty) || qty < minPers) qty = minPers;

  function render() {
    qtyValueEl.textContent = qty;
    minusBtn.disabled = qty <= minPers; // ✅ désactiver au minimum
  }

  // ✅ Pour éviter de doubler les listeners si tu reviens sur la page :
  // on remplace les boutons par des clones "neufs"
  const newMinus = minusBtn.cloneNode(true);
  const newPlus = plusBtn.cloneNode(true);

  minusBtn.parentNode.replaceChild(newMinus, minusBtn);
  plusBtn.parentNode.replaceChild(newPlus, plusBtn);

  newPlus.addEventListener("click", () => {
    qty += 1;
    render();
  });

  newMinus.addEventListener("click", () => {
    if (qty > minPers) qty -= 1;
    render();
  });

  render();
}

// Remplissage étoile pour avis
function initStarRating() {
    const stars = document.querySelectorAll(".star");
    const noteInput = document.getElementById("noteValue");

    if (!stars.length) return;

    stars.forEach(star => {

        // SURVOL
        star.addEventListener("mouseover", function () {
            const value = this.getAttribute("data-value");

            stars.forEach(s => {
                if (s.getAttribute("data-value") <= value) {
                    s.classList.add("hovered");
                } else {
                    s.classList.remove("hovered");
                }
            });
        });

        // QUAND ON QUITTE LA ZONE
        star.addEventListener("mouseout", function () {
            stars.forEach(s => s.classList.remove("hovered"));
        });

        // CLIC
        star.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            noteInput.value = value;

            stars.forEach(s => {
                if (s.getAttribute("data-value") <= value) {
                    s.classList.add("selected");
                    s.classList.remove("bi-star");
                    s.classList.add("bi-star-fill");
                } else {
                    s.classList.remove("selected");
                    s.classList.remove("bi-star-fill");
                    s.classList.add("bi-star");
                }
            });
        });

    });
}
