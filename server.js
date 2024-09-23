const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/webhook/github", (req, res) => {
  console.log("Received Webhook:", req.body);
  res.status(200).send("Webhook received");
});

app.get("/", (req, res) => {
  res.send("Server Listening");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
