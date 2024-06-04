import { CreateProduct } from './DTO/CrearProductoDto';
import { updateProduct } from './DTO/ActualizarProductoDto';
export declare class ProductosService {
    private Productos;
    GetAll(): {
        Cod: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    }[];
    GetAllId(Cod: Number): {
        Cod: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
    create(nuevo: CreateProduct): void;
    delete(Cod: number): void;
    update(Cod: number, prodActualizar: updateProduct): {
        Cod: number;
        nombre: string;
        categoria: string;
        año: string;
        precio: number;
        gama: string;
    };
}
