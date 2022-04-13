const si = require("systeminformation");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001 || process.env.PORT;
const os = require("os");

// const cpuinfo = ;
app.use(cors());
app.get("/cpu", (req, res) => {
  si.cpu().then((data) => res.send(data))
  .catch(error => res.send(error));
});

app.get("/ram", (req, res) => {
  si.mem().then((data) => res.send(data))
  .catch(error => res.send(error));
});

app.get("/gpu", (req, res) => {
  si.graphics().then((data) => res.send(data))
  .catch(error => res.send(error));
});

app.get("/battery", (req, res) => {
  si.battery().then((data) => res.send(data))
  .catch(error => res.send(error));
});

// app.get("/cpu", (req, res) => {
//   si.cpu().then((data) => res.send(data))
//   .catch(error => res.send(error));
// });

app.get("/os", (req, res) => {
  si.osInfo().then((data) => res.send(data))
  .catch(error => res.send(error));
});

app.listen(port, () => {
  console.log(`App listening port: ${port}`);
});
