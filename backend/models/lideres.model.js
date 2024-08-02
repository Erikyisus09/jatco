import { esquemaE } from "./empleados.model.js";
import { model } from "mongoose";

export const modeloL = new model('Tabla de lideres', esquemaE)