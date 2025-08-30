const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
async function connectDB(){
    try{
        const res = await mongoose.connect('mongodb+srv://preetam:preetam@cluster0.wg3g3.mongodb.net/socialmedia?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Connected to MongoDB:', res.connection.host);
    }
    catch(err){
        console.log('Error connecting to MongoDB:', err.message);
        

    }
}

connectDB();
app.use(cors());
app.use(express.json());

app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
