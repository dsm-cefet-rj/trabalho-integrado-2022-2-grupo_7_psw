import express from "express";
import db from "./config/dbConnet.js";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
routes(app);

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => {
  console.log("Conexao com banco feita com sucesso");
});

app.use(express.json());

export default app;
