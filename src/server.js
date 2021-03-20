import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
const app = polka();

const myMw = (req, res, next) => {
  console.log("Loggar middleware");
  req.mod = "Trams";
  next();
};

app.get("/propkeps", myMw, (req, res) => {
  console.log("propkepsget: Working");
  res.end(`Success: ${req.mod}`);
});

app
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
