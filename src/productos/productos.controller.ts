import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { updateProduct } from './DTO/ActualizarProductoDto';
import { CreateProduct } from './DTO/CrearProductoDto';

@Controller('productos')
export class ProductosController {



    constructor(
        private readonly productosService: ProductosService
    ) {}
    
    @Get()
    getAllProductos(){
        // return this.productos;
        return this.productosService.GetAll();
    }

    @Get(":Cod")
    getProductosById(@Param("Cod") Cod:String){
        // return this.productos[+id];
        return this.productosService.GetAllId(+Cod);
    }

    @Post()
    crearProducto(@Body() crearDto:CreateProduct){
        return this.productosService.create(crearDto);

    }
    @Patch(":Cod")
    actualizarProducto(
        @Param("Cod") Cod:String,
        @Body() updateDto:updateProduct){
        return this.productosService.update(+Cod,updateDto);
    }

    @Delete(":Cod")
    eliminarProducto(@Param("Cod") Cod:String){
        return this.productosService.delete(+Cod);
    }

}
