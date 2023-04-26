const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const userRoutes = require("./Routes/Routes");
var logger = require('morgan');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use("/api", userRoutes);


const port = 8000 | process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
