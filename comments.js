// Create web server
// Start web server
// Create a new comment
// Retrieve all comments
// Retrieve a single comment
// Update a comment
// Delete a comment
// End web server

// Create web server
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// Start web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  res.send('Comment is added to the database');
});

// Retrieve all comments
app.get('/comments', (req, res) => {
  res.send('Retrieve all comments');
});

// Retrieve a single comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Retrieve comment with id ${id}`);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  console.log(comment);
  res.send(`Comment with id ${id} has been updated`);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Comment with id ${id} has been deleted`);
});

// End web server