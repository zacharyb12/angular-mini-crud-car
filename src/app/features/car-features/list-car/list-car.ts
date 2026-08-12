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
  
  listCars = signal<Car[]>([])
  
  carService = inject(CarService)
  router = inject(Router)
  
  ngOnInit(): void {
    this.listCars = this.carService.getCars()
  }

  deleteCar(id : number){
    this.carService.deleteCar(id)
  }

  navigateToDetails(id : number){
    this.router.navigate(['/details-car',id])
  }
}
