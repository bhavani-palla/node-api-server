const express = require("express");
const router = express.Router();

const users = [];

// Routes
router.get("/users", (req, res) => {
  res.send(users);
});

/**
 * 
 */
router.post("/register", (req, res) => {
  const user = {
    userName: req.body.userName,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
    
    
    //Check if user already exists
    const existingUser = users.find(item => req.body.userName === item.userName)
    if (existingUser) {
        res.status(400).send({msg: "User already exists"})
    } else {
         users.push(user); 
    }

    res.send(user)
});


/**
 * User login
 */
router.post('/login', (req, res) => {
    console.log(req.body)
    const { userName, password } = req.body
    
    //Find user
    const user = users.find(item => {
      return  req.body.userName === item.userName && req.body.password === item.password
    })

   

    if (user) {
        res.send(user)
    } else {
        res.status(404).send({msg: "User not found"})
    }




})

module.exports = router;
