# Ajout du authService

- Création d'un AuthService
    - Methode Login ( vérification en dur l'email et le password ) modifier les valeurs du localStorage et les signaux
    - Methode Logout ( suppression des valeurs du localStorage et reinitialisation des signaux )

- Création de modèles pour l'authentification
    - LoginForm


- Création un composant Login
    - Formulaire avec email et password
    - Afficher un message d'erreur pour chaque champ
    - injection du authService pour appeler la methode login

- Dans la barre de navigation 
    - Ajouter un lien vers le composant Login
    - utiliser les directives conditionnelles pour afficher ou cacher le lien Login
    - utiliser les directives conditionnelles pour afficher ou cacher le lien Logout
    - afficher le lien vers la création d'un vehicule uniquement si l'utilisateur est connecté