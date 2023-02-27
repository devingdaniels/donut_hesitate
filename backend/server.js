const express = require("express");
const app = express();
const PORT = 8543;

// Middleware
const cors = require("cors");

app.use(cors());

// Database
const db = require("./src/config/db");

// Custom middleware error handler
const { errorHandler } = require("./src/middleware/errorHandling");

// Express middleware [THIS IS NEEDED FOR PUT AND POST(?) BUT WHY?????]
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/donuts", require("./src/routes/donutRoutes"));
app.use("/api/customers", require("./src/routes/customerRoutes"));
app.use("/api/employees", require("./src/routes/employeeRoutes"));

// Error middleware needs to be last .use()
// Called when there is an error on get, put, post, delete routes in /backend/src/controller
app.use(errorHandler);

// Listener
app.listen(PORT, () => {
  console.log(`Express started on http://localhost:${PORT}`);
});
