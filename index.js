const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'infinite_august23',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/employ', (req, res) => {
    db.query('SELECT * FROM employ', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  // Get a user by ID
app.get('/employ/:id', (req, res) => {
    const { id } = req.params;
    let errMsg = {"error":"Invalid Employ Id"};
    db.query('SELECT * FROM employ WHERE Empno = ?', [id], (err, results) => {
      if (err) throw err;
      if(results.length > 0){
        res.json(results[0]);
    }else{
          res.json(errMsg);
      }
    });
  });


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/public' +'/index.html'));
  });
