const express = require('express');
const pool = require('./db');
const port = 3000;

const app = express();


app.post('/', async (req, res) => {
    const {firstName, lastName, address, country} = req.body;
    try {
        await pool.query('INSERT INTO users (first_name, last_name, address, country) VALUES ($1, $2, $3, $4)', [firstName, lastName, address, country]);
        res.status(200).send({message: "Successfully added user"});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM users');
        res.status(200).send({children: data.rows});
    } catch (error) {
        console.log(error);
      //  res.sendStatus(500);
    }
})

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, first_name VARCHAR(100) NOT NULL,last_name VARCHAR(100) NOT NULL, address VARCHAR(255) NOT NULL, country INT NOT NULL);');
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


app.listen(port, () => {
    console.log(`Sever has started on port ${port}`);
});