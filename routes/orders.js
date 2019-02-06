// ROUTE - Orders
let firebase = require('../services/firebase');
let service = require('../services/services');

exports.get = (req, res, next) => {
    // Return all orders
}

exports.post = async (req, res, next) => {
    // Handle pizza order
    
    let ref = await firebase.db.collection('/orders').doc();

    let order = {
        id: ref.id,
        items: req.body,
        state: 'pending',
        drone: service.drone.getId()
    }

    await ref.set(order)    

    console.log(`Order ${order.id} recieved.`);
    res.status(200).send(order);

}

exports.patch = (req, res, next) => {
    // Update pizza order status
}