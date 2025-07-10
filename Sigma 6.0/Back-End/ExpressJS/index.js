const express = require('express');
const app = express();

// console.dir(app);

let port = 3000; //8080

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// app.use((req, res) => {
//     // console.log(req);
//   console.log('Request received:', req.method, req.url);
//   res.send({
//     name: "Priyanshu K Sharma",
//     age: 20,
//   })
// });

// app.use((req, res) => {
//     // console.log(req);
//   console.log('Request received:', req.method, req.url);
//   let code= "<h1>Hello World!</h1> <p>Welcome to my ExpressJS server.</p>";
//   res.send(
//     code
// )
// });

app.get('/', (req, res) => {
    res.send("You contatcted the root route!");
  });

app.get('/about', (req, res) => {
    res.send("You contatcted the about route!");
  });

app.get('/contact', (req, res) => {
    res.send("You contatcted the contact route!");
  });

app.get('/help', (req, res) => {
    res.send("You contatcted the help route!");
  });

// app.get("*", (req, res) => {
//     res.send("You contatcted a non-existing route");
//   });


app.post('/', (req, res) => {
    res.send("You made a POST request to the root route!");
  });


//  app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("Hello, I am root");
//   });

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Username: ${username}, ID: ${id}`);
    console.log(req.params);
  });

app.get("/search", (req, res) => {
    let {q, page} = req.query;
    res.send(`Search Query: ${q}, Page: ${page}`);
    console.log(req.query);
  });

app.get('/products', (req, res) => {
  const { category, sort } = req.query;
  if(!category || !sort) {
    res.status(400).send("Bad Request: Missing category or sort parameter");
  }
  res.send(`Category: ${category}, Sort by: ${sort}`);

  
});