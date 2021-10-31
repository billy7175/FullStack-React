const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const  postRoutes  = require("./routes/post");

// console.log('postRoutes', postRoutes)

// middleware
app.use(morgan("dev"));

app.use("/", postRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`A Node JS API is listening on port ${port}`);
});
