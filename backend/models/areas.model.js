import { Schema, model } from "mongoose";

export const esquemaA = new Schema({
    name: {
        Type: String
    },
    descripcion: {
        Type: String
    },
    responsable: {
        type: String
    }
})

export const ModelA = new model('Tabla de areas', esquemaA)