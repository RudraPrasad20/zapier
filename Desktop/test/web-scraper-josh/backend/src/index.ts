import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const express = require("express");
const app = express();
app.use(cors());

const downloadData = async (input: any) => {
  console.log("Fetching downloads for:", input);
  const res = await axios.get(`https://www.npmjs.com/package/${input}`);
  const html = res.data;

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const downloads = document.querySelector("._9ba9a726")?.textContent;
  console.log("Downloads:", downloads);

  return downloads;
};

app.get("/", async (req: any, res: any) => {
  try {
    const input = req.query.input;
    console.log("Input from query:", input);
    const downloads = await downloadData(input);
    res.json({ downloads });
  } catch (error) {
    console.error("Error retrieving downloads data:", error);
    res.status(500).send("Error retrieving downloads data");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
