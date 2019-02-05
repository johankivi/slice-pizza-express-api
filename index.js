const express = require('express');
const cors = require('cors');

// Routes
const menu = require('./routes/menu');
const orders = require('./routes/orders');

let app = express();

app.use(express.json());
app.use(cors()); // Dev


app.route('/menu')
.get(menu.get)

app.route('/orders')
.get(orders.get)
.post(orders.post)
.patch(orders.patch)


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Up n running on port ${PORT}. Hit me with the pizza orders!`);
})