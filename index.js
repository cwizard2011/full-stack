import express from 'express';

const app = express();

app.get('/', (req, res)=> {
  res.send({hello: 'Peter'});
});

const PORT = process.env.PORT || 5000
app.listen(PORT);