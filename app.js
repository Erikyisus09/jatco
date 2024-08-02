import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import dotenv from 'dotenv'; 
import {test} from './backend/controllers/empleados.controller.js';
import { test2 } from './backend/controllers/lideres.controller.js';
import { test3 } from './backend/controllers/nomina.controller.js';
import { test4 } from './backend/controllers/areas.controller.js';


dotenv.config();
mongoose.connect(process.env.url) 
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express();
app.use (cors());

app.listen(4005,()=>{ 
    console.log ('Si funciona el servidor')
})

test()
test2()
test3()
test4()