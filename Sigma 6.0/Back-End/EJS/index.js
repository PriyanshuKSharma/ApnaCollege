const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});


// app.get("/rolldice", (req, res) => {
//     res.render("rolldice.ejs");
// });

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceV: diceValue });
});

// app.get("/ig/:username", (req, res) => {
//     // res.render("hello.ejs", { name: "Apna College" });

//     const followers = ["adam", "eve", "john", "doe"];
//     let { username } = req.params;
//     // console.log(username); 
//     res.render("instagram.ejs", { username, followers });
// });

app.get('/rolls', (req, res) => {
  let rolls = [];
  for (let i = 0; i < 5; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  res.render('rolls', { rolls });
});


app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json");
    const { username } = req.params;
    const data = instaData[username];
    
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("instagram.ejs", { data: { name: username, followers: 0, following: 0, posts: [] } });
    }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



