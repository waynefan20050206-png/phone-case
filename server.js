const express = require('express');
const db = require('./database/db');
const app = express();
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');
const cartRoute = require('./routes/cart');

app.use(express.json());
app.use('/auth', authRoute);
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/cart', cartRoute);

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
)`);

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    db.run(
        `INSERT INTO users (username, password) VALUES (?, ?)`,
        [username, password],
        function(err) {
            if (err) return res.status(500).send(err.message);
            res.send({ message: "User registered!", user_id: this.lastID });
        }
    );
});

app.get('/users', (req, res) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.send(rows);
    });
});

app.get('/db-test', (req, res) => {
  db.all("SELECT name FROM sqlite_master WHERE type='table';", (err, rows) => {
    res.json(rows);
  });
});

app.listen(3000, () => console.log("Server running")); 
