import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La Galerie", "/pages/galerie.html", []),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", [], "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", [], "/js/auth/inscription.js"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", []),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html", []),
    new Route("/contact", "Contactez-nous", "/pages/contact.html", []),
    new Route("/menu", "Découvrez nos menus", "/pages/menu.html",[]),
    new Route("/panier", "Mon panier", "/pages/commandes/panier.html", []),
    new Route("/allCommandes", "Vos commandes", "/pages/commandes/allCommandes.html", []),
    new Route("/menuDetails1", "", "/pages/menuDetails/menuDetails1.html", [], "/js/menuDetails/menuDetails1.js"),
    new Route("/menuDetails2", "Menu Terroir & Tradition", "/pages/menuDetails/menuDetails2.html",[]),
    new Route("/menuDetails3", "Menu Terroir & Tradition", "/pages/menuDetails/menuDetails3.html",[]),
    new Route("/menuDetails4", "Menu Terroir & Tradition", "/pages/menuDetails/menuDetails4.html",[]),
    new Route("/menuDetails5", "Menu Terroir & Tradition", "/pages/menuDetails/menuDetails5.html",[]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite & Gourmand";