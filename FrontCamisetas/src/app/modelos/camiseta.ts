import { Equipo } from "./equipo";
import { Marca } from "./marca";

export class Camiseta {
    id!:number;
    nombre!:string;
    precio!:number;
    descripcion!:string;
    foto!:string;
    equipo!:Equipo;
    marca!:Marca;

}
