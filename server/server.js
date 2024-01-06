const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

//morgan installation connection
const morgan = require("morgan");
//configure morgan to log requests
app.use(morgan("dev"));

//parsing incoming json requests
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("hi");
  // res.sendFile(path.join(__dirname, /* add indext html file her*/ ));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// DO WE NEED THIS ??
// module.exports = app
