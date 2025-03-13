const express=require('express')
const dotenv=require('dotenv')
const productRoutes=require('./routes/productRoutes');

dotenv.config();

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Use the routes for products
app.use('/api/products', productRoutes);

// Set up a basic route to check server status
app.get('/', (req, res) => {
  res.send('E-commerce Backend is Running!');
});

// Set up the port from environment variables
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
