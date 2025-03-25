import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import bookRouter from './routes/book.route.js';
import cors from 'cors'
dotenv.config()
const app = express();
const port = 5000;


// Middleware
app.use(express.json());
app.use(cors());
app.use('/books', bookRouter )

app.listen(port, () => {
    connectDB();
    console.log(`Server is listening on port: ${port}`);
});




// CORS is a security mechanism - restricts the ability of a web page to make requests to a different domain
// The browser sends a request to the target server - the server will check weather this request 
// is permitted or not
// SERVER can check ORIGIN METHOD HEADERS