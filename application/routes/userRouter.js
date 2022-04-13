
const express = require('express');

const userRouter = express.Router();
let Users = [{
    id: 1,
    name: 'John',
    email: 'John@company.com',
    age: 30,
    profession: 'teacher'
},
{
    id: 2,
    name: 'Anne',
    email: 'Anne@company.com',
    age: 23,
    profession: 'waitress'
},
{
    id: 3,
    name: 'Jack',
    email: 'Jack@company.com',
    age: 41,
    profession: 'lawyer'
}];


userRouter
    .route('/')
    .get(getAllUsers);
userRouter
    .route('/:name/:email/:age/:profession')
    .post(createUser);
userRouter
    .route('/?:id/?:name/?:email/?:age/?:profession')
    .patch(updateUser);
userRouter
    .route('/:id')
    .get(getUser)
    .delete(deleteUser);

//functions
function getAllUsers(req, res){
    res.status(200).send(Users);
}
function getUser(req, res){
    res.status(200).send(
        Users.find(user => user.id === parseInt(req.params.id))
    );
}

function createUser(req, res){
        if(req.params.name && req.params.email && req.params.age && req.params.profession){
            const newUser = {
                id: Users.length + 1,
                name: req.params.name,
                email: req.params.email,
                age: req.params.age,
                profession: req.params.profession
            }
        Users.push(newUser);
        res.status(200).send("User created successfully");
            }else{
                res.status(400).send('Your user was not on a proper format');
            }
    }

function updateUser(req, res){
        const USERS = Users.map(user => user = user.id === parseInt(req.params.id) ? {
            id: user.id,
            name: req.params.name ? req.params.name : user.name,
            email: req.params.email ? req.params.email : user.email,
            age: req.params.age ? req.params.age : user.age,
            profession: req.params.profession ? req.params.profession : user.profession
        } : user
    );
    Users = USERS;
    if(req.params.id){
    res.status(200).send(`User ${req.params.id} updated successfully`);
}
}

function deleteUser(req, res){
    //delete user
    const USERS = Users.filter(user => user.id !== parseInt(req.params.id));
    Users = USERS;
    res.status(200).send(`User ${req.params.id} deleted successfully`);
}

module.exports = userRouter;