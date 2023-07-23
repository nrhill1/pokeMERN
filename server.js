import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';



// Import Routes
import {authRoutes} from './routes/auth.js';
import {pokeRoutes} from './routes/pokemon.js';

// Set up Express
const app = express();

// JSON Middleware
app.use(express.json());
// CORS Middleware
app.use(cors());

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Auth Routes
app.use("/auth", authRoutes);
app.use("/poke", pokeRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
