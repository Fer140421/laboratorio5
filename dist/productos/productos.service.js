"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
let ProductosService = class ProductosService {
    constructor() {
        this.Productos = [
            { Cod: 111, nombre: 'Honor magic 5 lite', categoria: 'Celulares', año: '2021', precio: 1800, gama: 'alta' },
            { Cod: 222, nombre: 'Iphone 15', categoria: 'Celulares', año: '2022', precio: 9000, gama: 'alta' },
            { Cod: 333, nombre: 'Samsung s30', categoria: 'Celulares', año: '2022', precio: 9000, gama: 'alta' },
        ];
    }
    GetAll() {
        return this.Productos;
    }
    GetAllId(Cod) {
        const prod = this.Productos.find(p => p.Cod === Cod);
        if (!prod)
            throw new common_1.NotFoundException(`Producto con el id '${Cod}' no encontrado`);
        return prod;
    }
    create(nuevo) {
        const New = {
            Cod: this.Productos.length + 1,
            nombre: nuevo.nombre,
            categoria: nuevo.categoria,
            año: nuevo.año,
            precio: nuevo.precio,
            gama: nuevo.gama
        };
        this.Productos.push(New);
    }
    delete(Cod) {
        let prod = this.GetAllId(Cod);
        if (prod) {
            this.Productos = this.Productos.filter(pp => pp.Cod !== Cod);
        }
    }
    update(Cod, prodActualizar) {
        let prod = this.GetAllId(Cod);
        this.Productos = this.Productos.map(p => {
            if (p.Cod === Cod) {
                prod.nombre = prodActualizar.nombre;
                prod.categoria = prodActualizar.categoria;
                prod.año = prodActualizar.año;
                prod.precio = prodActualizar.precio;
                prod.gama = prodActualizar.gama;
                return prod;
            }
            return p;
        });
        return prod;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)()
], ProductosService);
//# sourceMappingURL=productos.service.js.map