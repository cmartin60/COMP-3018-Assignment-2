import express, { Express } from "express";
import morgan from "morgan";

import setupSwagger from "../config/swagger";
import itemRoutes from "./api/v1/routes/itemRoutes";

const app: Express = express();

// Setup Swagger for API documentation
setupSwagger(app);

app.use(morgan("combined"));
app.use(express.json());

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req, res) => {
	res.send("Retrieve tasks");
});

// define GET route for health check
/**
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: Get health status of the application
 *   tags: [Health]
 *   responses:
 *    200:
 *     description: The application's status, uptime, the current timestamp, and version
 */
app.get("/api/v1/health", (req, res) => {
    res.json({
      status: "OK",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    });
    // send JSON response with status, server uptime, current time, API version
  });
  
  app.use("/api/v1/items", itemRoutes);

export default app;
