import express from "express";
import User from "./routers/User.js";
import tasks from "./routers/Tasks.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/User", User); 
app.use("/Tasks", tasks)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`);
    console.log(`http://[::]:${PORT}`);
});
