// Importación de paquetes Node
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importacion de las rutas
import authRouter from './routes/authRoute.js';
import productRouter from './routes/productRoute.js';
import purchaseOrderRouter from './routes/purchaseOrderRoute.js';
import userRouter from './routes/userRoute.js';

// Inicializacion de server
const server = express();

// Implementación de recepción de formantos Json
server.use(bodyParser.json());

// Implementación de cors (permitir accesos)
server.use(cors());

// Implementación de rutas de la solución
server.use('/api', authRouter);
server.use('/api', productRouter);
server.use('/api', purchaseOrderRouter);
server.use('/api', userRouter);

// Exportación de toda la configuración del servidor
export default server;