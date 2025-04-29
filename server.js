const express = require('express');
const bodyParser = require('body-parser');
const jokeRoutes = require('./routes/jokeRoutes');
const app = express();

app.use(bodyParser.json());
<<<<<<< HEAD
app.use(express.static('views')); // serve index.html

=======
>>>>>>> e78e1f36c3ba4f96b62772865c80e3d2469dcb7d
app.use('/jokebook', jokeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});