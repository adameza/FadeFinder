const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }

app.get('/users', (req, res) => {
   const name = req.query.name;
   const job = req.query.job;
   if (name != undefined){
       let result = findUserByName(name);
       result = {users_list: result};
       res.send(result);
   }
   if (job != undefined){
      let result = findUserByJob(job);
      result = {users_list: result};
      res.send(result);
  }
   else{
        res.send(users);
   }
});

const findUserByName = (name) => { 
   return users['users_list'].filter( (user) => user['name'] === name); 
}

const findUserByJob = (job) => { 
   return users['users_list'].filter( (user) => user['job'] === job); 
}

app.get('/users/:id', (req, res) => {
   const id = req.params['id']; //or req.params.id
   let result = findUserById(id);
   if (result === undefined || result.length == 0)
       res.status(404).send('Resource not found.');
   else {
       result = {users_list: result};
       res.send(result);
   }
});

function findUserById(id) {
   return users['users_list'].find( (user) => user['id'] === id); // or line below
   //return users['users_list'].filter( (user) => user['id'] === id);
}

app.post('/users', (req, res) => {
   const userToAdd = req.body;
   
   addUser(userToAdd);
   
   res.status(201).send(userToAdd); //this is step 3 and we are sending the entire user object back. Now we need to handle the rest on the front end to "pluck" the ID out
});

function addUser(user){
   user.id = generateRandomId();
   users['users_list'].push(user);
}

function generateRandomId() {
   let string = "";
   for (let i = 0; i < 6; i++) {
       string += Math.floor(Math.random() * 10);
   }
   return string;
}

app.delete('/users/:id', (req, res) => {
   const id = req.params['id'];
   deleteUser(id);
   res.status(204).end();
});

function deleteUser(id){
   const index = users['users_list'].findIndex(user => user.id === id);
   if (index !== -1) {
      users['users_list'].splice(index, 1);
   }
}




