const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

//morgan installation connection
const morgan = require("morgan");
//configure morgan to log requests
app.use(morgan("dev"));


//connecting to database/ importing mongoose 
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://ewester:strawberry123@scratch-project-databas.yygo57o.mongodb.net/"
mongoose.connect(mongoURI);

mongoose.connection.once('open', ()=>{
  console.log('Connected to Database')
})


//parsing incoming json requests
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("hi");
  res.sendFile(path.join(__dirname, "./client/index.html"));
});


app.post

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// DO WE NEED THIS ??
module.exports = app
