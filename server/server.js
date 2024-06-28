import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
