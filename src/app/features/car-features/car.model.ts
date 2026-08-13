export interface Car{
    id : number
    brand : string
    color : string
    puissance : number
    imageUrl : string
}

export interface AddCarModel{
    brand : string
    color : string
    puissance : number
    imageUrl : string
}

export interface UpdateCarModel{
    color : string
    puissance : number
    imageUrl : string
}