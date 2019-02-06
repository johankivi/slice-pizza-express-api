// Drone
exports.drone = {
    getId(){
        return `SLICER${(Math.random()*10).toFixed()}`;
    }
}

// Cooking
exports.cooking = {
    start(order){
        // Change state on order to 'baking'
    }
}

// Delivery
exports.deliver = {
    start(order){
        // Change state to 'out for delivery'
    },
    done(order){
        // Change state to 'delivered'
    }
}