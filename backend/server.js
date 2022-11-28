import app from "./src/app.js";
import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Servidor escudanto em http://localhost:${port}`);
});
