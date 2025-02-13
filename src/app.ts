// import the express application and type definition
import express, { Express } from "express";
import morgan from "morgan";

// import setupSwagger endpoint
import setupSwagger from "../config/swagger";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoute";


// initialize the express application
const app: Express = express();

// setup swagger for api documentation
setupSwagger(app);

app.use(morgan("combined"));
app.use(express.json());

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// example "tasks" endpoint
/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
 */
app.get("/tasks", (req, res) => {
  res.send("Retrieve tasks");
});


// Health Check Endpoint
app.get("/health", (req, res) => {
	res.status(200).send("Server is healthy");
});


app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/branches", branchRoutes); 

// export app and server for testing
export default app;