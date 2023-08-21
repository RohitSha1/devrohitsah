require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const users = require("./models/userSchema");
const router = require("./Routes/router");

const port=8004;


app.use(cors());
app.use(express.json());
app.use(router)

// app.get("/", (req, res) => {
//     res.status(200).json("Running")
// });


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
  })


app.listen(port,()=>{
    console.log(`listening on port on :${port}`)
})




// Set the Access-Control-Allow-Origin header




// Start the server
// app.listen(8004, () => {
//   console.log('Server started on port 8004')
// })

// Handle the POST request to /register
// app.post('http://localhost:8004/register', (req, res) => {
//     res.status(200).json("Running")
//   // Handle the request
//   // ...
// })