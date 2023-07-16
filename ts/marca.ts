import {
    IsString,
    IsNotEmpty
  } from "class-validator";
  
  import { Expose } from "class-transformer";
  
  /* 
  
      {
          "marca": "Acer", -> String
      }
  */
  
  export class marca {

    @Expose()
    @IsNotEmpty({ message: 'El campo marca no puede estar vacío' })
    @IsString({ message: 'El campo marca debe ser un string' })
    marca: string;
    
  }
  