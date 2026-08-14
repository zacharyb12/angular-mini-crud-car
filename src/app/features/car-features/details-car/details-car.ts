import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../core/services/car/car-service';
import { AuthService } from '../../../core/services/auth/auth-service';

@Component({
  selector: 'app-details-car',
  imports: [],
  templateUrl: './details-car.html',
  styleUrl: './details-car.css',
})
export class DetailsCar implements OnInit {
  
  // permet de récupérer une informations au travers de la route
  activatedRoute = inject(ActivatedRoute)
  
  // permet de faire appel au methode de CarService
  carService = inject(CarService)

  authService = inject(AuthService)
  isAdmin = this.authService.isAdmin



  // router pour permettre la redirection ( avec un parmètre )
  router = inject(Router)

// l'objet à afficher , qui est vide tant que l'on à pas récupérer les informations du service
  car : Car | null = {
    id : 0,
    brand : '',
    puissance : 0,
    color : '',
    imageUrl : ''
  }
  
  // permet d'exécuter un ensemble d'actions lors de la création du composant
  ngOnInit(): void {
    // on récupère l'information de la route
    const id = +this.activatedRoute.snapshot.params['id']
    
    this.car = this.carService.getCarById(id) ?? null
  }

  navigateToUpdate(){
    this.router.navigate(['/update-car',this.car?.id])
  }
}
