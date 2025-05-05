const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//import the user routes
const userRoutes = require('./routes/users');

//import the MongoDB connection file
require('./models/db');

//middleware
app.use(express.json());

app.use('/api/users', userRoutes);


//adding routes
app.get('/api/users', (req, res) => {
    const users=[
        {id:1, name: 'John Kamau'},
        {id:2, name: 'Ruth Doe'},
    ]
res .json(users);
});

//server creation
app.listen (port, ()=>{
    console.log('Server is running on http://localhost:&{port}');
})