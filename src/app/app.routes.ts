import { Routes } from '@angular/router';
import { Homepage } from './features/homepage/homepage';
import { ListCar } from './features/car-features/list-car/list-car';
import { AddCar } from './features/car-features/add-car/add-car';
import { DetailsCar } from './features/car-features/details-car/details-car';
import { UpdateCar } from './features/car-features/update-car/update-car';
import { Login } from './features/auth-features/login/login';
import { loggedGuard } from './core/guards/logged-guard/logged-guard';
import { adminGuard } from './core/guards/admin-guard/admin-guard';
import { quitGuard } from './core/guards/quit-guard/quit-guard';

export const routes: Routes = [
    { path : '',  component : Homepage },
    { path : 'list-car' , component : ListCar , canActivateChild : [],
        children : [
            { path : 'test1' , component : ListCar},
            { path : 'test2' , component : ListCar},
        ]
    },
    { path : 'add-car' , component : AddCar , canActivate : [adminGuard], canDeactivate : [quitGuard]}, // accès limité
    // ici on défini qu'un paramètre id sera transmis par la route
    { path : 'details-car/:id' , component : DetailsCar , canActivate : [loggedGuard]},
    { path : 'update-car/:id' , component : UpdateCar , canActivate : [adminGuard]}, // accès limité
    { path : 'login' , component : Login}
];
