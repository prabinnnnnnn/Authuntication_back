require("dotenv").config();
const http = require("http");
const app = require("./app");
const Database = require("./src/config/mongoDB");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await Database();
    console.log("✅ Database connected");

    const server = http.createServer(app);
    server.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
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
