const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8082;
const app = express();
app.use(cors());

app.get("/", (request, response)=>{
    response.status(200).json("You have found the server!")
})

app.listen(PORT, ()=>console.log(`app is listening on port ${PORT}`));