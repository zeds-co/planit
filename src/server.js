const express = require("express");
const PORT = 3000;
const app = express();

app.get("/country")
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});