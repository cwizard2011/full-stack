import express from 'express';
import './models/User'
import mongoose from 'mongoose';
import  './services/passport';
import keys from './config/keys';
import authRoutes from './routes/authRoutes'; 
import cookieSession from 'cookie-session';
import passport from 'passport';

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session())

authRoutes(app);

const PORT = process.env.PORT || 3000
app.listen(PORT);