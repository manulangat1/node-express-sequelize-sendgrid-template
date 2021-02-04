import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import bodyParser from 'body-parser';
import modules from './modules';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(morgan('tiny'))


//handle cors
app.use(cors())

//
modules(app)
// generic 404 
app.get('*', (req,res) => res.status(404).send("Route not found...") )
app.listen(PORT, console.log(`Node server running on ${PORT} in ${process.env.NODE_ENV}`.yellow.underline.bold));


export default app;