const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", function (req, res) {
	res.json({ message: "Hello from the server!" });
});

app.get("*", function (req, res) {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, function () {
	console.log(`Server running on port ${PORT}`);
});
