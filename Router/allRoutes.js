import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La Galerie", "/pages/galerie.html", []),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", ["disconnected"], "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", ["disconnected"], "/js/auth/inscription.js"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", ["ROLE_USER","ROLE_EMPLOYEE","ROLE_ADMIN"]),
    new Route("/employee", "Compte Employé", "/pages/auth/employee.html",["ROLE_EMPLOYEE","ROLE_ADMIN"]),
    new Route("/admin", "Compte Administrateur", "/pages/auth/admin.html",["ROLE_ADMIN"], "/js/auth/admin.js"),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html", ["ROLE_USER","ROLE_EMPLOYEE","ROLE_ADMIN"]),
    new Route("/contact", "Contactez-nous", "/pages/contact.html", []),
    new Route("/menu", "Découvrez nos menus", "/pages/menu.html",[]),
    new Route("/panier", "Mon panier", "/pages/panier.html", ["ROLE_USER"]),
    new Route("/menuDetails1", "Menu Terroir & Tradition", "/pages/menuDetails/menuDetails1.html",[], "/js/menuDetails/menuDetails1.js"),
    new Route("/menuDetails2", "Menu Volaille & Douceur", "/pages/menuDetails/menuDetails2.html",[]),
    new Route("/menuDetails3", "Menu Jardin & Gourmandise", "/pages/menuDetails/menuDetails3.html",[]),
    new Route("/menuDetails4", "Menu Délice & Végétal", "/pages/menuDetails/menuDetails4.html",[]),
    new Route("/menuDetails5", "Menu Mer & Fraîcheur", "/pages/menuDetails/menuDetails5.html",[]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite & Gourmand";