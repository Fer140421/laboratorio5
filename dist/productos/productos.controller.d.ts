import { ProductosService } from './productos.service';
import { updateProduct } from './DTO/ActualizarProductoDto';
import { CreateProduct } from './DTO/CrearProductoDto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    getAllProductos(): {
        Cod: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    }[];
    getProductosById(Cod: String): {
        Cod: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
    crearProducto(crearDto: CreateProduct): void;
    actualizarProducto(Cod: String, updateDto: updateProduct): {
        Cod: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
    eliminarProducto(Cod: String): void;
}
