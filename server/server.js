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
git})

// app.get("/habitat", async (request, response)=>{
// const query = `http://localhost:8082/animal?query=${request.query.habitat}`;
// const res = await axios.get(query);

// const something = res.data.results.filter((habitat)=>{})


//     const habitat = request.query.habitat;

//     const animalObj = data.find((animal)=> animal.habitat == habitat)
// response.json("help")
// console.log(animalObj)
// })

app.listen(PORT, ()=>console.log(`app is listening on port ${PORT}`));