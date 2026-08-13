import { Component, inject, OnInit, signal } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../../../core/services/car/car-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-car',
  imports: [],
  templateUrl: './list-car.html',
  styleUrl: './list-car.css',
})
export class ListCar implements OnInit{
  
  // donées à afficher
  listCars = signal<Car[]>([])
  
  // injection du service pour accéder au methodes de celui-ci
  carService = inject(CarService)

  // injection du Router , qui permet de déclencher une redirection 
  router = inject(Router)
  
  // onInit déclenche la récupération des véhicules au chargement du composant
  ngOnInit(): void {
    this.listCars = this.carService.getCars()
  }

  // appel du service pour la suppression
  deleteCar(id : number){
    this.carService.deleteCar(id)
  }

  navigateToDetails(id : number){
    // redirection avec le paramètres ID attendu sur la route "details" : app.routes
    this.router.navigate(['/details-car',id])
  }
}
