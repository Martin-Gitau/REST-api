const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

try {
    mongoose.connect('mongodb://localhost:27017/restapidb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err.message);
    });
} catch (err) {
    console.error('Error connecting to MongoDB', err.message);
}
