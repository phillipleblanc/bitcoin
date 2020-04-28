import express from "express";
import proxy from "http-proxy-middleware";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  "/",
  proxy({
    target: "https://api.coinbase.com",
    changeOrigin: true
  })
);

app.listen(port, () => console.log(`API Server listening on port ${port}!`));
