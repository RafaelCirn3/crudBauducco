import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bauduccoRoutes from './src/routes/bauduccoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());

//conexão com o mongoDB
const mongoURL = 'mongodb+srv://admin:admin@dbbauducco.z3cocg3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { })
    .then(() => { 
        console.log('conexão com o MongoDB realizada');

    })
    .catch((error) => {
        console.error('Erro ao conectar com o mongoDB: ', error);
    });

//Routes
    app.use('/api', bauduccoRoutes);
    app.listen(PORT, () => {
        console.log(`Servidor em execução na porta ${PORT}`);
    });