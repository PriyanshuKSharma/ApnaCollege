const express = require("express");
const app = express();
const port = 8080;

// Middleware to parse JSON bodies(for POST handling)
app.use(express.json());
// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));


app.get("/register", (req, res) => {
    let {username, password} = req.query;
    console.log(`Username: ${username}, Password: ${password}. Wecome! ${username}`);
    // Here you would typically handle the registration logic, e.g., saving to a database
    // For now, we just send a response back
    res.send("Standard GET request received!");
});

app.post("/register", (req, res) => {
    let {username, password} = req.body;
    console.log(`Username: ${username}, Password: ${password}. Wecome! ${username}`);
    // Here you would typically handle the registration logic, e.g., saving to a database
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});