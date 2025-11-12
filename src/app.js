import express from "express";
import animal from "./routes/animal.js";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/animal", animal);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`); //ip vesion 6
    console.log(`http://[::]:${PORT}`);
});