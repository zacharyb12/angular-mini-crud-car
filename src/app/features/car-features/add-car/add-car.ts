import { Component, inject } from '@angular/core';
import { AddCarModel, Car } from '../car.model';
import { CarService } from '../../../core/services/car/car-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  imports: [ReactiveFormsModule],
  templateUrl: './add-car.html',
  styleUrl: './add-car.css',
})
export class AddCar {

  formGroupCar : FormGroup;

  fb = inject(FormBuilder)

  carService = inject(CarService)
  
  router = inject(Router)
  
  constructor(){
    this.formGroupCar = this.fb.group({
      brand : ['',[Validators.required,Validators.minLength(3)]],
      color : ['',[Validators.required]],
      puissance : [0,[Validators.required,Validators.min(0)]],
      imageUrl : ['',[Validators.required]],
    })
  }

  addCar(){   
   if(this.formGroupCar.valid){

     this.carService.addCar(this.formGroupCar.value)
     
     this.router.navigateByUrl('/list-car')
    }
  }
}
