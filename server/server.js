const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

//morgan installation connection
const morgan = require("morgan");
//configure morgan to log requests
app.use(morgan("dev"));

//parsing incoming json requests
app.use(express.json());

app.use('/build', express.static(path.join(__dirname,'../build')))
app.get("/", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, '../client/index.html'))
  // res.sendFile(path.join(__dirname, /* add indext html file her*/ ));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// DO WE NEED THIS ??
// module.exports = app
