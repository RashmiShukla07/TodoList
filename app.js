const express = require('express');
const bodyParser = require('body-parser');
const date  = require(__dirname+"/date.js")
const app = express();

const items = ["Eat", "Code", "Sleep"];
const workItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  const Day  = date.getDate();
  res.render('list', {ListTitle: Day, newListItems: items});
});

app.post("/", function(req, res) {
  const NewItem = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(NewItem);
    res.redirect("/work");
  } else {
    items.push(NewItem);
    res.redirect("/");
  }
});
app.get("/add",function(req,res){
  const Day  = date.getDate();
  res.render('add', {ListTitle: Day});
});
app.post("/add", function(req,res){
  const NewItem = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(NewItem);
    res.redirect("/work");
  } else {
    items.push(NewItem);
    res.redirect("/");
  }
});
app.get("/work", function(req, res) {
  res.render('list', {
    ListTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) {
  const NewItem = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render('about');
})
app.listen(3000, function(req, res) {
  console.log("Server Running")
})
