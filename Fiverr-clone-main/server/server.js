import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js"; // Corrected typo
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strict", true); // Use 'strict' instead of 'strictQuery'

const connectMongodb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sundayarua10:smeconnect@smeconnect.opwfzyx.mongodb.net/sundayarua10",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected Successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

const corsOptions = {
  origin: [
    "http://localhost:8080",
    "http://localhost:4173",
    "https://fiverr-clone-zuhed.netlify.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors()); // Handle preflight requests

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversation", conversationRoute); // Corrected route name
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!🤔";
  return res.status(errorStatus).send(errorMessage);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectMongodb();
  console.log(`Server running on port http://localhost:${PORT}`);
});
