import { Routes } from '@angular/router';
import { Homepage } from './features/homepage/homepage';
import { ListCar } from './features/car-features/list-car/list-car';
import { AddCar } from './features/car-features/add-car/add-car';
import { DetailsCar } from './features/car-features/details-car/details-car';
import { UpdateCar } from './features/car-features/update-car/update-car';
import { Login } from './features/auth-features/login/login';

export const routes: Routes = [
    { path : '',  component : Homepage },
    { path : 'list-car' , component : ListCar},
    { path : 'add-car' , component : AddCar},
    // ici on défini qu'un paramètre id sera transmis par la route
    { path : 'details-car/:id' , component : DetailsCar},
    { path : 'update-car/:id' , component : UpdateCar},
    { path : 'login' , component : Login}
];
