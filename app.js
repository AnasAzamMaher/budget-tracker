const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/TransactionRoute');
const path = require('path');

dotenv.config();
connectDB();
const app = express();

const corsOptions = {
    origin: `${process.env.FRONTEND_URL}`,  
    methods: ['GET', 'POST', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/transactions', transactionRoutes);

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'frontend', "build")));
    res.sendFile(path.resolve(__dirname, 'frontend', "build", "index.html"));
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
