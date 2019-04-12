const express = require('express');
const cors = require('cors');
const catRoute = require('../src/routes/cats/catsRoute');
const dogRoute = require('./routes/dogs/dogsRoute');

const app = express();
app.use(cors());
app.use('/api/cat', catRoute);
app.use('/api/dog', dogRoute);

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


app.listen(8000, () => {
  console.log('Serving on 8000');
});