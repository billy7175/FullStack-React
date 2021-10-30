const express = require('express');
const app = express()

// bring in routes
const postRoutes = require('./routes/post')

app.get("/", postRoutes.getPosts)

// app.get("/", (req, res) => {
//   res.send("Hello World From Node JS.")
// })


const port = 8080
app.listen(port, () => {
  console.log(`A Node JS API is listening on port ${port}`)
})