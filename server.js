require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const PORT = 5000;
const Store = require("./models/store")
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// const path = require("path");
// const http = require("http");

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//  connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// mongoose.connect("mongodb://localhost:3000/posts", { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.once("connected", () =>
  console.log("Mongoose is all ready")
);

//  Index
app.get("/store/main", (req, res) => {
  Store.find({}, (err, itemsFound) => {
    if (!err) {
      res.status(200).render("Index", { items: itemsFound });
    } else {
      res.status(400).send(err);
    }
  });
});

//  Splash
app.get("/store", (req, res) => {
  res.render("Splash");
});

//  About
app.get("/store/about", (req, res) => {
  res.render("About");
});

//  New
app.get("/store/new", (req, res, next) => {
  res.render("New");
});

//  Delete
app.delete("/store/:id", (req, res) => {
  Store.findByIdAndDelete(req.params.id, (err, foundItem) => {
    if (!err) {
      res.status(200).redirect("back");
    } else {
      res.status(400).json(err);
    }
  });
});

//  Update
app.put("/store/:id", (req, res) => {
  Store.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (!err) {
        res.status(200).redirect("back");
      } else {
        res.status(400).json(err);
      }
    }
  );
});
//  Create
app.post("/store", (req, res) => {
  Store.create(req.body, (failure, success) => {
    if (!failure) {
      res.status(200).redirect("back");
    } else {
      res.status(400).send(failure);
    }
  });
});

//  Edit
app.get("/store/:id/edit", (req, res) => {
  Store.findById(req.params.id, (err, editItem) => {
    if (!err) {
      res.status(200).render("Edit", {
        item: editItem,
      });
    } else {
      res.status(400).send(err);
    }
  });
});

//  Show
app.get("/store/:id", (req, res) => {
  Store.findById(req.params.id, (err, foundItem) => {
    if (!err) {
      res.status(200).render("Show", {
        item: foundItem,
      });
    } else {
      res.status(400).send(err);
    }
  });
});
//  Buy Route
app.put("/store/:id/buy", async (req, res) => {
  try {
    await Store.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } });
    res.redirect("back");
  } catch (err) {
    res.send(err.message);
  }
});

// app.listen(PORT, () => {
//   console.log(`Listening in on Port: ${PORT}`);
// });
app.listen(process.env.PORT || 5000)