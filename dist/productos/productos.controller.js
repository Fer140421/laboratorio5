"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const productos_service_1 = require("./productos.service");
const ActualizarProductoDto_1 = require("./DTO/ActualizarProductoDto");
const CrearProductoDto_1 = require("./DTO/CrearProductoDto");
let ProductosController = class ProductosController {
    constructor(productosService) {
        this.productosService = productosService;
    }
    getAllProductos() {
        return this.productosService.GetAll();
    }
    getProductosById(Cod) {
        return this.productosService.GetAllId(+Cod);
    }
    crearProducto(crearDto) {
        return this.productosService.create(crearDto);
    }
    actualizarProducto(Cod, updateDto) {
        return this.productosService.update(+Cod, updateDto);
    }
    eliminarProducto(Cod) {
        return this.productosService.delete(+Cod);
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "getAllProductos", null);
__decorate([
    (0, common_1.Get)(":Cod"),
    __param(0, (0, common_1.Param)("Cod")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "getProductosById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearProductoDto_1.CreateProduct]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "crearProducto", null);
__decorate([
    (0, common_1.Patch)(":Cod"),
    __param(0, (0, common_1.Param)("Cod")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        ActualizarProductoDto_1.updateProduct]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "actualizarProducto", null);
__decorate([
    (0, common_1.Delete)(":Cod"),
    __param(0, (0, common_1.Param)("Cod")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductosController.prototype, "eliminarProducto", null);
exports.ProductosController = ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map