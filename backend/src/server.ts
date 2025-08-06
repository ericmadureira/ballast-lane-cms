import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import passport from 'passport';
import passportConfig from './config/passport';
import sequelize from './db';

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// CORS config to allow frontend access.
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Can be "http://localhost:5173" if restrict.
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Passport
passportConfig(passport);
app.use(passport.initialize());

// Routes
import authRoutes from './routes/auth.routes';
import postRoutes from './routes/post.routes';
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// DB sync + Start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
