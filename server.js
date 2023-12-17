const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv=require("dotenv")
const mongoose = require("mongoose");

const router = require("./routes/task-route");
const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

const url = process.env.MONGO_URL;
mongoose.set('strictQuery',false)
mongoose
  .connect(url)
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log("Error in connecting with databse -", err));
const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});