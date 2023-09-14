const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./connectdb/connect');
const personRoutes = require('./routes/personRoutes');
app.use(express.json());
const port = process.env.PORT || 5000;

app.use('/api', personRoutes);

const start = async() => {
    try {
       await connectDB(process.env.Mongo_URI);
       app.listen(port, () =>  console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();