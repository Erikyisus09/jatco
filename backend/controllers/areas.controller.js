import { ModelA } from "../models/areas.model.js";

ModelA.create({
    name:  "Paqueteria",
    descripcion: "Area de empaquetado de productos", 
    responsable: "Montse"
})

export const test4 = ()=>{
    console.log("Se esta llamndo el controlador de Areas")
}