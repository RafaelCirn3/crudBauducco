import express from 'express';
import bauduccoRoutes from './routes/bauduccoRoutes'; 
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/produtos', bauduccoRoutes);

app.listen(port, ()=> {
    console.log(`Hosteando nessa porta :D :  ${port}`);
})