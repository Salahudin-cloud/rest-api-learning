require("dotenv").config();
const express = require("express");
const port = process.env.SERVER_PORT;
const connectDB = require("./config/db");
const mahasiswaRoute = require("./routes/mahasiswaRoute");
const app = express();
//connect to mongodb
connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// debug
app.use((req, res, next) => {
  console.log(req.body, req.method, req.url);
  next();
});

app.use("/", mahasiswaRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/mahasiswa/api`);
});
