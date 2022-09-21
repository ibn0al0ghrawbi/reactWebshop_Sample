const express = require("express");
const app = express();
const PORT = 8080;

const webshop = require("./webshop.json");

const { default: axios } = require("axios");
const router = express.Router;

app.use(express.json()); //middle ware that converts everything incoming into json

app.listen(PORT, () =>
  console.log(`Server is alive: http://localhost:${PORT}`)
);

app.get("/catalog", (req, res) => {
  if (Object.keys(req.query).length > 0) {
    if (req.query.subtype) {
      const newValue = req.query.subtype.split(",");

      const filteredList = webshop.filter(({ subtype }) =>
        newValue.includes(subtype)
      );
      res.status(200).send(filteredList);
    } else if (req.query.search) {
      const value = req.query.search;

      const searchedList = webshop.filter((obj) => {
        for (const item in obj) {
          if (!obj.hasOwnProperty(item)) continue;
          if (obj[item].includes(value)) {
            return obj;
          }
        }
        
      });

      res.status(200).send(searchedList);
    }
  } else {
    res.status(200).send(webshop);
  }
});

app.get("/catalog/:id", (req, res) => {
  const filteredArray = webshop.filter((item) => item.id === req.params.id);

  res.status(200).send(filteredArray);
});
