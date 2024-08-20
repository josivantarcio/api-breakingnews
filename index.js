const express = require("express");
const userRouter = require("./src/routes/user.routes");

const port = 3000  

const app = express();
app.use(express.json());

app.use("/user",userRouter);
app.listen(port, () => console.log(`Sistema rodando na porta ${port}`));