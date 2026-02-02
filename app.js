const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/response', (req, res) => {
  const answer = req.body.answer;
  
  if (answer === 'yes') {
    res.render('yes');
  } else if (answer === 'no') {
    // The "no" button will redirect with a fun message
    res.json({ redirect: '/' });
  }
});

app.get('/no', (req, res) => {
  res.render('no');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`💕 Valentine's website running on http://localhost:${PORT}`);
});
