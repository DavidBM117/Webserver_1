import express, { response } from 'express'
import { setEngine } from 'node:crypto';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port= 8080;


app.use(express.static('public'));

app.get('/',(request, response)=>{
    response.send("Hola¡¡¡¡");
});


app.get("/index",(request,response)=>{
    response.sendFile((path.resolve(__dirname,'public/index.html')));
});

app.get("/elements",(request,response)=>{
    response.sendFile((path.resolve(__dirname,'elements.html')));
});

app.get("/generic",(request,response)=>{
    response.sendFile((path.resolve(__dirname,'generic.html')));
});

app.get(/.*/,(request,response)=>{
    response.sendFile((path.resolve(__dirname,'public/404.html')));
});

app.listen(port,()=>{
    console.log("Escuchando ahora el puerto",port);
});