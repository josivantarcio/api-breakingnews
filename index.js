const express = require("express");
const app = express();

app.get("/soma", (req, res) => {
    res.send ({soma: 5+5});
});

app.listen(3000 ); 