const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// app.get("/", function (req, res) {
//   res.send("<h1>Hello World!!!!!!!!</h1>");
// });

app.get("/about", function (req, res) {
  res.send({
    name: "mike",
    age: 30,
  });
});

app.post("/quiz", function (req, res) {
  // フォームの入力値を取得
  const answer = req.body.answer;
  if (answer === '2') {
    // レンダリング
    res.send("<h1>正解</h1>");
  } else {
    // res.send('不正解')
    // htmlを返す
    res.redirect('/quiz.html')
  }
});

app.listen(3000, () => console.log("running!"));
