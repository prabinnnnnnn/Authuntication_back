import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./app.js";
import Database from "./src/config/mongoDB.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await Database();
    console.log("✅ Database connected");

    const server = http.createServer(app);
    server.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`),
    );

    process.on("SIGINT", () => {
      console.log("\n🛑 Shutting down...");
      server.close(() => process.exit(0));
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();
