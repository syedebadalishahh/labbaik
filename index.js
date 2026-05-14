import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api", async (req, res) => {
    const url = req.query.url;

    if (!url) return res.send("No URL");

    try {
        const response = await fetch(url);
        const data = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");

        res.send(data);
    } catch (e) {
        res.send("Error");
    }
});

app.listen(3000, () => console.log("Running"));
