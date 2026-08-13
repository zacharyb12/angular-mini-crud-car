import { Injectable, signal } from '@angular/core';
import { AddCarModel, Car, UpdateCarModel } from '../../../features/car-features/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  listCar = signal<Car[]>([
    {
      id : 1,
      brand : 'bmw',
      puissance : 1000,
      color : 'black',
      imageUrl : 'https://media.istockphoto.com/id/1702770505/fr/photo/bmw-550i.jpg?s=612x612&w=0&k=20&c=VTbPZzZgbQTgXx2-3DEo9xYnIFjwuRnxtczFovmAiwQ='
    }
  ])

  lastId = this.listCar()[this.listCar().length - 1].id + 1

  getCars(){
    return this.listCar
  }

  addCar(newCar : AddCarModel){

    const newCarToAdd : Car = {
      id : this.lastId,
      brand: newCar.brand,
      color: newCar.color,
      puissance: newCar.puissance,
      imageUrl: newCar.imageUrl
    }
    

    this.listCar.update((list) => [...list,newCarToAdd])

    this.lastId++
  }

  deleteCar(id : number){
    this.listCar.update((list) => list.filter((c) => c.id !== id))
  }

  getCarById(id : number){
    const index = this.listCar().findIndex((c) => c.id === id)

    if(index === -1){
      return
    }

    return this.listCar()[index]
  }

  updateCar(updatedCar : UpdateCarModel,id : number){

    const index = this.listCar().findIndex((c) => c.id === id)

    this.listCar()[index].color = updatedCar.color
    this.listCar()[index].puissance = updatedCar.puissance
    this.listCar()[index].imageUrl = updatedCar.imageUrl

  }
}
