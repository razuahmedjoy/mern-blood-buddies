require("dotenv").config();
const app = require("./app");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 5000;

// connect to database
connectDb();


app.listen(PORT, async () => {
  console.log(`Server started on port http://localhost:${PORT}`);
  

});
