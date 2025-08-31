import express from "express";
import dotenv from "dotenv";
import productRoutes from './routes/product.route';
import { sequelize } from "./database/database";
import cors from 'cors';
dotenv.config();


const app = express();
app.use(cors());

app.use(express.json());

// Routes
app.use("/products", productRoutes);

app.get('/health', (req, res) => {
  console.log('Health check hit');
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});


const PORT = process.env.PORT || 8000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
