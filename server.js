// var express = require("express");
// var bodyParser = require("body-parser");
// var app = express();
const mysql = require('mysql2');
// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000'
// }
// app.use(cors(corsOptions));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TRIBLema321!',
  database: 'life_balance',
  port: 4200
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  };
  res.json(data);
});

app.post('/api/data', async (req, res) => {
  const { name, age, email } = req.body;

  // connection.execute(
  //   'INSERT INTO recipe (recipe_name, recipe_portions) VALUES (?, ?)',
  //   ["jajecznica", 2]
  // );
  res.json({ message: 'Data received' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/get_data/:data', (req, res) => {
  connection.query("select * from ??", [req.params.data], (err, rows) => {
      if (err) throw err;
      res.send(rows)
    });
});



app.post('/add_new_recipe', async (req, res) => {
  const { name, age, email } = req.body;

  
  res.json({ message: 'Data received xdd' });
});

