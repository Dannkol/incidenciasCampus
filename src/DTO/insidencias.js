var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsString, IsNotEmpty, IsInt, IsDateString } from "class-validator";
import { Expose } from "class-transformer";
/*

  {
      "nombre_insidencia": "No enciende", -> String
      "descripcion_insidencia": "breve descripcion", -> String
      "equipo": 1, -> Number
      "lugar": 1, -> Number
      "fecha": "2023-07-15", -> Date
      "nivel": 3, -> Number
      "categoria": 2, -> Number
  }
*/
export class insidencias {
}
__decorate([
    Expose(),
    IsNotEmpty({ message: 'El campo nombre_insidencia no puede estar vacío' }),
    IsString({ message: 'El campo nombre_insidencia debe ser un string' })
], insidencias.prototype, "nombre_insidencia", void 0);
__decorate([
    Expose(),
    IsNotEmpty({ message: 'El campo descripcion_insidencia no puede estar vacío' }),
    IsString({ message: 'El campo descripcion_insidencia debe ser un string' })
], insidencias.prototype, "descripcion_insidencia", void 0);
__decorate([
    Expose(),
    IsNotEmpty({ message: 'El campo equipo no puede estar vacío' }),
    IsInt({ message: 'El campo equipo debe ser un string' })
], insidencias.prototype, "equipo", void 0);
__decorate([
    Expose(),
    IsNotEmpty({ message: 'El campo lugar no puede estar vacío' }),
    IsInt({ message: 'El campo lugar debe ser un string' })
], insidencias.prototype, "lugar", void 0);
__decorate([
    Expose(),
    IsNotEmpty({ message: 'El campo nivel no puede estar vacío' }),
    IsInt({ message: 'El campo nivel debe ser un string' })
], insidencias.prototype, "nivel", void 0);
__decorate([
    Expose(),
    IsNotEmpty({ message: 'El campo categoria no puede estar vacío' }),
    IsInt({ message: 'El campo categoria debe ser un string' })
], insidencias.prototype, "categoria", void 0);
__decorate([
    Expose(),
    IsDateString({ message: 'El campo fecha debe ser una fecha válida' }, { each: true })
], insidencias.prototype, "fecha", void 0);
