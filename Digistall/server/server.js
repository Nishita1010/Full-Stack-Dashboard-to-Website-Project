const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 5000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(bodyParser.json({ limit: "50mb" }));

const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "db_digistall", 
  password: "Nishita", 
  port: 5432,
});

// Check if the database connection is working
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected:", res.rows); 
  }
});

app.post("/api/gallery", async (req, res) => {
  const { image_url } = req.body;

  if (!image_url) {
    return res.status(400).json({ message: "Image URL is required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO gallery (image_url) VALUES ($1) RETURNING *",
      [image_url]
    );
    res
      .status(200)
      .json({ message: "Image saved successfully", data: result.rows[0] });
  } catch (err) {
    console.error("Error inserting image:", err);
    res.status(500).json({ message: "Error saving image" });
  }
});

// fetch api
app.get("/api/gallery", async (req, res) => {
  try {
    const result = await pool.query("SELECT image_url FROM gallery");
    res.status(200).json(result.rows); 
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ message: "Error fetching images" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
