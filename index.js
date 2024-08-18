const express = require("express");
const app = express();

app.get("/soma", (req, res) => {
    var soma = 56+11;
    res.send ({soma: soma});
});

app.listen(3000 ); 