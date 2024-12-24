const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is a common mistake.  The following line of code will not work.
  // because the res.send() will immediately close the response
  // and no more data can be sent later in the same response.
  res.send('Hello');
  setTimeout(() => {
    res.send('World!'); // This will never be sent
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));