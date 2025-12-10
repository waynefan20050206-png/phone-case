const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
// const productRoutes = require('./routes/products');
// const cartRoutes = require('./routes/cart');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(
  session({
    secret: "group13-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.use('/', authRoutes);
app.use('/', profileRoutes);
// app.use('/products', productRoutes);
// app.use('/cart', cartRoutes);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });


app.listen(PORT, () => {
  console.log(`✅ server on：http://localhost:${PORT}`);
});
