const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8543;
// Custom middleware error handler
const { errorHandler } = require("./src/middleware/errorHandling");
// Express middleware [THIS IS NEEDED FOR PUT AND POST(?) BUT WHY?????]
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
app.use("/api/donuts", require("./src/routes/donutRoutes"));
app.use("/api/customers", require("./src/routes/customerRoutes"));
app.use("/api/employees", require("./src/routes/employeeRoutes"));
app.use("/api/sales", require("./src/routes/saleRoutes"));
// Error middleware needs to be last .use()
// Called when there is an error on get, put, post, delete routes in /backend/src/controller
app.use(errorHandler);
// Listener
app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}...`);
});
