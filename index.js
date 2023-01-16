const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const jugadoresRouter = require('./src/api/routes/jugador.routes');
const equiposRouter = require('./src/api/routes/equipo.routes');
const usuariosRouter = require('./src/api/routes/usuario.routes');
dotenv.config();
const {connect} = require('./src/utils/database');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})
const app = express();
connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH');  //definimos que metodos permitimos en nuestra API
    res.header('Access-Control-Allow-Credentials', 'true'); //podemos recibir una conexion con credenciales
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //tipos de cabeceras que permitimos
    next();
})

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://RUTADEMIFRONT.com'],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/jugadores', jugadoresRouter);
app.use('/equipos', equiposRouter);
app.use('/usuarios', usuariosRouter);


app.use('*', (req, res, next) => {
    return res.status(404).json("Route not found");
})

app.use((error, req, res, next)=>{
    return res.status(500).json("Error: " + error.message || "Unexpected error");
})
app.listen(5000, () => console.log('listening on port 5000'));