const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  let message = 'Hello';
  await new Promise(resolve => setTimeout(resolve, 1000));
  message += ' World!';
  res.send(message);
});
app.listen(3000, () => console.log('Server listening on port 3000'));