import express from 'express';
import bauduccoRoutes from './routes/bauduccoRoutes'; 
import bodyParser from 'body-parser';
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/produtos', bauduccoRoutes);

app.listen(port, ()=> {
    console.log(`Hosteando nessa porta :D :  ${port}`);
})