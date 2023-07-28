const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8082;
const app = express();
app.use(cors());

const data = require("./data/data.json");
// console.log(data)

app.get("/", (request, response)=>{
    response.status(200).json("You have found the server!")
})

app.get("/animal", (request, response)=>{
 response.json(data)
})


app.listen(PORT, ()=>console.log(`app is listening on port ${PORT}`));