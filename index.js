import express from "express";
import cors from "cors";

const app = express();

//config
app.use(cors());
app.use(express.json());

//code

//port
app.listen(5000, () => console.log("Server running in port 5000"));
