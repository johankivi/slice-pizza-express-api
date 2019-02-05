// RESURS - MENU

let menu = require('../data/menu.json');

exports.get = (req, res, next) => {
    // Return JSON pizza menu
    res.status(200).send(menu)

}