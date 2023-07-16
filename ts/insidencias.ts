import {
    IsString,
    IsNotEmpty,
    IsInt,
    IsDateString
  } from "class-validator";
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

    @Expose()
    @IsNotEmpty({ message: 'El campo nombre_insidencia no puede estar vacío' })
    @IsString({ message: 'El campo nombre_insidencia debe ser un string' })
    nombre_insidencia: string;

    @Expose()
    @IsNotEmpty({ message: 'El campo descripcion_insidencia no puede estar vacío' })
    @IsString({ message: 'El campo descripcion_insidencia debe ser un string' })
    descripcion_insidencia: string;
    
    @Expose()
    @IsNotEmpty({ message: 'El campo equipo no puede estar vacío' })
    @IsInt({ message: 'El campo equipo debe ser un string' })
    equipo: number;

    @Expose()
    @IsNotEmpty({ message: 'El campo lugar no puede estar vacío' })
    @IsInt({ message: 'El campo lugar debe ser un string' })
    lugar: number;

    @Expose()
    @IsNotEmpty({ message: 'El campo nivel no puede estar vacío' })
    @IsInt({ message: 'El campo nivel debe ser un string' })
    nivel: number;

    
    @Expose()
    @IsNotEmpty({ message: 'El campo categoria no puede estar vacío' })
    @IsInt({ message: 'El campo categoria debe ser un string' })
    categoria: number;

    @Expose()
    @IsDateString({ message: 'El campo fecha debe ser una fecha válida' }, { each: true })
    fecha?: Date;
  }
  