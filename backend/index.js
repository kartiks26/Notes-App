const connectToMongo = require("./database/db");
const express = require("express");
const cors = require("cors");
connectToMongo();

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
// Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
// Middelware

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
