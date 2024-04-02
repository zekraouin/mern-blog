const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;




const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mern-blog")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Use CORS middleware
const cors = require("cors");
app.use(cors());
// Define routes
const indexRouter = require("./routes/indexRouter")
const userRouter = require("./routes/userRouter");

app.use("/", indexRouter);
app.use("/api/users", userRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
