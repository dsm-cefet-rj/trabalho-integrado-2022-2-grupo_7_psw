import app from "./src/app.js";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
