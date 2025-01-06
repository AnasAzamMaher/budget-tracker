const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/TransactionRoute');

dotenv.config();
connectDB();

const corsOptions = {
    origin: 'http://localhost:5173',  // Add your frontend URL here
    methods: ['GET', 'POST', 'DELETE'],  // Allow these HTTP methods
  };
app.use(cors(corsOptions));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
