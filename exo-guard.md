# Exo Guard

- Création de deux guards
    - CanActivate ( admin )
    - CanDeactivate ( formulaire non sauvegardé )

    - Injection du authService dans le guard pour récupérer l'état de connexion de l'utilisateur

- Limiter avec le canActivate l'accès au routes 
    - Add-car
    - update-car

- Ajouter le guard canDeactivate sur les pages
    - Add-car
    - update-car