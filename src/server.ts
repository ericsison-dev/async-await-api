import "dotenv/config";
import express from "express";
import userRoutes from "./routes/users";
import { connectDb } from "./mongodb";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

connectDb();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
