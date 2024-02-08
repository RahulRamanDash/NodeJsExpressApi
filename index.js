
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/login', (req, res) => {
    res.send('<h1>this is the login page</h1>')``
});
app.use(express.static('public'));

// Add a new route for the /about page
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We are a team of developers passionate about Node.js and Express.js.</p>');
});