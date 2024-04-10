import express from "express";
import session from "express-session";
import ViteExpress from "vite-express"
import morgan from "morgan";
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "secretKey",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(express.static('public'));

// Routes



// Server Startup
const port = 9904;
ViteExpress.listen(app, port, () => console.log(`Server is up running at http://localhost:${port}`))