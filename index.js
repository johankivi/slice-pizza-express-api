const express = require('express');
const cors = require('cors');

// Routes
const menu = require('./routes/menu');
const orders = require('./routes/orders');

let app = express();

app.use(express.json());
app.use(cors());

app.route('/menu')
.get(menu.get)

app.route('/orders')
.get(orders.get)
.post(orders.post)
.patch(orders.patch)


app.listen(3001, () => {
    console.log('Up n running. Hit me with the pizzas.');
})