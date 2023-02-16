const express = require("express");
const app = express();
const PORT = 3500;

// Database
const db = require("./db-connector");

/* ------ ROUTES ----- */
app.get("/", function (req, res) {
  res.send("Back end server is running...");
});

/* ---- LISTENER  ---*/
app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(`Express started on http://localhost on port ---> ${PORT}`);
});
