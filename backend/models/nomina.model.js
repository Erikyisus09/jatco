import { Schema, model } from "mongoose";

export const esquemaN = new Schema({
    idempleado: {
        type: Number
    },
    salario: {
        type: Number
    },
    Fecha_pago: {
        type: Date
    }
})

export const modelN = new model('Tabla de nominas', esquemaN)