const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "priyanshuksharma",
        content: "This is my first post"
    },
    {
        username: "nehagaikwad",
        content: "Welcome to my vlog!!!"
    },
    {
        username: "meghanagaikwad",
        content: "I got selected in my first internship"
    }
];

app.get("/posts", (req, res) => {
    res.render("index", { posts });
});


app.get("/posts/new", (req, res) => {
    res.render("new");
}); 


app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});