"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const bauduccoRoutes_1 = __importDefault(require("./src/routes/bauduccoRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//middleware
app.use(body_parser_1.default.json());
//conexão com o mongoDB
const mongoURL = 'mongodb+srv://admin:admin@dbbauducco.z3cocg3.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.connect(mongoURL, {})
    .then(() => {
    console.log('conexão com o MongoDB realizada');
})
    .catch((error) => {
    console.error('Erro ao conectar com o mongoDB: ', error);
});
//Routes
app.use('/api', bauduccoRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});
