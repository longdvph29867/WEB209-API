import express from "express";
import { connectDB } from "./src/utils/db.js";
import router from "./src/routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;
const app = express();
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
app.use(express.json());
app.use(cors());
connectDB(URI_DB);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description: "My API Documentation",
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
      {
        url: "https://asm-web-503.vercel.app/",
      },
    ],
    components: {
      securitySchemes: {
        JWT: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
  },
  apis: ["./src/**/*.js"],
  cors: true,
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
);

app.use("/", router);

app.listen(PORT, () => {
  console.log("Listen", PORT);
});
