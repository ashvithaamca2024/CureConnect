import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
import path from "path";


// app config

const app = express();
const port = process.env.PORT || 4000;


const __dirname = path.resolve()


// Database and cloud
connectDB();
connectCloudinary();



// if(process.env.NODE_ENV !== "production"){
 app.use(
  cors({
    origin: [
      "http://localhost:5173", // user frontend
      "http://localhost:5174", // admin frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "aToken"],
    credentials: true,
  })
);
// }

// Allow preflight requests
app.options("*", cors());





// middleware
app.use(express.json());

// api endpoint
app.use("/api/admin", adminRouter);
//localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);


if (process.env.NODE_ENV === "production") {

  // -------- USER FRONTEND --------
  app.use(
    express.static(path.join(__dirname, "../frontend/dist"))
  );

  // -------- ADMIN FRONTEND --------
  app.use(
    "/admin",
    express.static(path.join(__dirname, "../admin/dist"))
  );

  // Admin React Router fallback
  app.get("/admin/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../admin", "dist", "index.html")
    );
  });

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend", "dist", "index.html")
    );
  });
}


app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server Started", port));
