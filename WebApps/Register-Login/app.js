const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.post('/', (req, res) => {
    const { name, email, password } = req.query;
    console.log(`${name} ${email} ${password}`);

    main().then(() => {
        res.send("Conenction to the database established.");
    })
        .catch((err) => {
            res.send("Conenction to the database could not be established.");
        });

    async function main() {
        await mongoose.connect('mongodb+srv://TestUsername:TestPassword@testcluster.x1itz.mongodb.net/?retryWrites=true&w=majority')
    }

    res.header("Access-Control-Allow-Origin", "*");

});

app.listen(3000, () => { });