import { Component, inject } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../../../core/services/car/car-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  imports: [FormsModule],
  templateUrl: './add-car.html',
  styleUrl: './add-car.css',
})
export class AddCar {

  newCar : Car = {
    id: 0,
    brand: '',
    color: '',
    puissance: 0,
    imageUrl: ''
  }

  carService = inject(CarService)

  router = inject(Router)

  addCar(){
    this.carService.addCar(this.newCar)

    this.router.navigateByUrl('/list-car')
  }
}
