const express = require('express');
const path = require('path');

const app = express();

app.use((req,res,next) => {
  res.showView = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('/user/panel', (req,res) => {
  res.showView('login.html');
});

app.use('/user/settings', (req,res) => {
  res.showView('login.html');
});


app.get('/', (req, res) => {
  res.showView('home.html');
});

app.get('/home', (req, res) => {
  res.showView('home.html');
});

app.get('/about', (req,res) => {
  res.showView('about.html');
});


app.use((req,res) => {
  res.showView('error.html');
});

app.listen(3000, () => {
  console.log(path.join(__dirname, 'Server is running on port: 3000'));
});
