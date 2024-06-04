import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduct } from './DTO/CrearProductoDto';
import { updateProduct } from './DTO/ActualizarProductoDto';
@Injectable()
export class ProductosService {
private Productos=[
    {Cod:111,nombre:'Honor magic 5 lite',categoria:'Celulares', año:'2021', precio:1800,gama:'alta'},
    { Cod:222,nombre:'Iphone 15',categoria:'Celulares', año:'2022', precio:9000,gama:'alta'},
    { Cod:333,nombre:'Samsung s30',categoria:'Celulares', año:'2022', precio:9000,gama:'alta'}, 
];
GetAll(){
    return this.Productos;
}
GetAllId(Cod:Number){
    const prod = this.Productos.find( p => p.Cod === Cod );
    if ( !prod ) throw new NotFoundException(`Producto con el id '${ Cod }' no encontrado`);   
    return prod;
}
create(nuevo:CreateProduct){
    const New = {
        Cod: this.Productos.length+1,
        nombre:nuevo.nombre,
        categoria:nuevo.categoria,
        año:nuevo.año,
        precio:nuevo.precio,
        gama:nuevo.gama
    }
    this.Productos.push( New );
}
delete(Cod:number){
    let prod = this.GetAllId(Cod);
    if(prod){
        this.Productos = this.Productos.filter (pp => pp.Cod !== Cod)
    }
}
update(Cod:number, prodActualizar:updateProduct){
    let prod = this.GetAllId(Cod);
    
    this.Productos = this.Productos.map( p => {
        if ( p.Cod === Cod ) {
            prod.nombre = prodActualizar.nombre;
            prod.categoria = prodActualizar.categoria;
            prod.año = prodActualizar.año;
            prod.precio = prodActualizar.precio;
            prod.gama = prodActualizar.gama;
            return prod;
        }

        return p;
    })
    return prod;
}
}