const express = require("express");
require('dotenv').config();

const integration = {};
integration.register = require("./integration/register");

const app = express();

let data = [];

app.get("/register", async (req, res) => {
    try {
        let data = req.query.d;

        if (! data) return res.send({err: "no data"});

        let content = data
        for (x in content) console.log(x)
        integration.register.save(content);

        res.send({msg: "ok"})
    }
    catch (err) {
        console.log(err);
        res.send({err : "Some error"})
    }
});

app.listen(process.env.PORT || 3000);