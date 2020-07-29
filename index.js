const express = require("express");
require('dotenv').config();

const app = express();

app.get("/register", async (req, res) => {
    try {

        

        res.send({msg: "ok"})
    }
    catch (err) {
        console.log(err);
        res.send({err : "Some error"})
    }
});

app.listen(process.env.PORT || 3000);