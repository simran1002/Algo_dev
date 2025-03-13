import app from "./app";
import connectDB from "./config/db";
const PORT=process.env.PORT;

connectDB();
app.listen(5000, () => console.log("Server running on port 5000"));
