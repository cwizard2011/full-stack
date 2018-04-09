import express from 'express';
import './models/User';
import './models/Survey'
import mongoose from 'mongoose';
import  './services/passport';
import keys from './config/keys';
import authRoutes from './routes/authRoutes';
import billingRoutes from './routes/billingRoutes'; 
import surveyRoutes from './routes/surveyRoutes'
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import path from 'path'

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session())

authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV=== 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT);