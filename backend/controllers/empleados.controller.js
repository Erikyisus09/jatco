import { modelE } from "../models/empleados.model.js";

modelE.create({
    name: "erik",
    id: 56542,
    celular: 4493246229
})

export const test = ()=>{
    console.log("se esta llamando al controlador de empleados" )
}
