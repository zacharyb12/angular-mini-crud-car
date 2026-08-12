import { Component, inject, OnInit, signal } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../core/services/car/car-service';

@Component({
  selector: 'app-details-car',
  imports: [],
  templateUrl: './details-car.html',
  styleUrl: './details-car.css',
})
export class DetailsCar implements OnInit{

  // permet de récupérer une informations au travers de la route
  activatedRoute = inject(ActivatedRoute)

  carService = inject(CarService)
  id = signal<number>(0)


  car : Car | null = {
    id : 0,
    brand : '',
    puissance : 0,
    color : '',
    imageUrl : ''
  }

  ngOnInit(): void {
    // on récupère l'information de la route
    const id = +this.activatedRoute.snapshot.params['id']
    this.id.set(id)
    

    this.car = this.carService.getCarById(id) ?? null
  }
}
