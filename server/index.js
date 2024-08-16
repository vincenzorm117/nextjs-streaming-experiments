const express = require("express");
const app = express();
const port = process.env.PORT;
const fruits = require('./fruits.json');


// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/", (req, res) => {
    let timeout = parseInt(req?.query?.t);
    console.log(new Date(), timeout);

    if(isNaN(timeout) || timeout < 0){
      res.json(fruits);
      return;
    }

    setTimeout(() => {
      res.json(fruits);
    }, timeout*1000);
});

app.listen(port, () => {
  console.log("Listening");
});
