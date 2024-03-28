import  express from "express";
import signupRouter from "./routes/signupRoutes/signupRoutes.js"
import loginRouter from "./routes/loginRoutes/loginRoutes.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.use("/signup", signupRouter);
app.use("/login", loginRouter);

app.get('/', (req, res) => {
    console.log(`home route was hit`);
    res.send('working')
})

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`);
})