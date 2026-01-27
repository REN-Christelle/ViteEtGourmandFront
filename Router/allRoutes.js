import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La Galerie", "/pages/galerie.html", []),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", ["disconnected"], "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", ["disconnected"], "/js/auth/inscription.js"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", ["client","admin"]),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html", ["client","admin"]),
    new Route("/contact", "Contactez-nous", "/pages/contact.html", []),
    new Route("/menu", "Découvrez nos menus", "/pages/menu.html",[]),
    new Route("/panier", "Mon panier", "/pages/commandes/panier.html", ["client","admin"]),
    new Route("/allCommandes", "Vos commandes", "/pages/commandes/allCommandes.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite & Gourmand";