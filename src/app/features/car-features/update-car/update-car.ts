import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../core/services/car/car-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-car',
  imports: [ReactiveFormsModule],
  templateUrl: './update-car.html',
  styleUrl: './update-car.css',
})
export class UpdateCar {

  // activatedRoute pour récupérer l'informations depuis la route
  activRoute = inject(ActivatedRoute)

  // injection du router pour la redirection
  router = inject(Router)

  // injection du service Car
  carService = inject(CarService)

  // formBuilder pour la construction du formulaire
  fb = inject(FormBuilder)

  formUpdate : FormGroup;

  id = signal<number>(0)

  constructor(){
    this.formUpdate = this.fb.group({
      color : ['',[Validators.required]],
      puissance : [0,[Validators.required]],
      imageUrl : ['',[Validators.required]]
    })

    // récupération de l'id dans la route
    const id = +this.activRoute.snapshot.params['id']
    
    // sauvegarde de la valeur de l'id
    this.id.set(id)

    const car = this.carService.getCarById(id)

    this.formUpdate.patchValue(
      {
        color : car?.color,
        puissance : car?.puissance,
        imageUrl : car?.imageUrl
      }
    )
  }

  updateCar(){
    if(this.formUpdate.valid){
      this.carService.updateCar(this.formUpdate.value,this.id())

      this.router.navigateByUrl('/list-car')
    }
  }
}
