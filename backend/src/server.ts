import express from 'express';
import helmet from 'helmet';
import passport from 'passport';
import dotenv from 'dotenv';
import sequelize from './db';
import passportConfig from './config/passport';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// Passport
passportConfig(passport);
app.use(passport.initialize());

// Rotas
import authRoutes from './routes/auth.routes';
import postRoutes from './routes/post.routes';
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// DB sync + Start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
