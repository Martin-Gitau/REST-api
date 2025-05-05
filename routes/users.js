const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');


// Create a new user   
router.post ('/', (req, res) => {
    const { name, email, password, age } = req.body;

   // const saltRounds = 10;)
   const newUser = new User({name, email, password, age});

    newUser.save()
    .then(() => {
        res.json (user);
  })
    .catch((err) => {
        res.status(500).json({ message: 'Error creating user', error: err.message });
});
});

//read all users
router.get('/', (req, res) => {
    User.find() // Replace 'users' with 'User'
    .then ((user) => {  
        res.json(user);
    })
    .catch ((err) => {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    })
})

//UPDATE  a user by Id
router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    User.findByIdAndUpdate(id, { name, email, password, age }, { new: true }) // Replace 'user' with 'User'
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(500).json({ message: 'Error updating user', error: err.message });
    });
})

//DELETE a user by Id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    User.findByIdAndDelete(id) // Replace 'user' with 'User'
    user.findByIdAndDelete(id)
    .then(() => {
        res.json({ message: 'User deleted successfully' });
    })
    .catch((err) => {
        res.status(500).json({ error: 'Error deleting user', error: err.message });
    });
});

module.exports = router;