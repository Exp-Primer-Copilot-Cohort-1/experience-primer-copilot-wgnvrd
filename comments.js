// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/comments', function(req, res) {
  res.json([
    {
      "id": 1,
      "author": "Pete Hunt",
      "text": "This is one comment"
    },
    {
      "id": 2,
      "author": "Jordan Walke",
      "text": "This is *another* comment"
    }
  ]);
});

// Start server
app.listen(3001, function() {
  console.log('Server started: http://localhost:3001/');
});