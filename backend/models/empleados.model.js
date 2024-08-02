import { Schema, model } from "mongoose";

export const esquemaE = new Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    },
    celular:{
        type: Number
    }
})

export const modelE = new model("tabla de empleados", esquemaE)
