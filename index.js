import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const subDomainWhiteList = ["ressler", "cooper", "reddington", "fourbit", "algosolver"];

app.get("/", (req, res) => {
  const subdomain = req.subdomains[0];

  if (subDomainWhiteList.includes(subdomain)) {
    res.send(`<h1>I am ${subdomain} 😎</h1>`);
  }

  res.send(`
    <h1>App is running!! 🔥</h1>
    <ul>
        <li>
        <a href='https://ressler.suppaflash.com' target="_blank">Ressler</a>
        </li>
          <li>
        <a href='https://cooper.suppaflash.com' target="_blank">Cooper</a>
        </li>
          <li>
        <a href='https://reddington.suppaflash.com' target="_blank">Reddington</a>
        </li>
    </ul>
    `);
});

// app.get("/:username", (req, res) => {
//   const availableUsernames = ["ressler", "cooper", "reddington"];

//   if (!availableUsernames.includes(req.params.username)) {
//     res.status(404).end();
//   }

//   res.send(`
//     <a href='/'><-- Back</a>
//     <h1>I am ${req.params.username} 😎</h1>
//     `);
// });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 App is running on port: ${PORT}`);
});
