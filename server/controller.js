const houses = require('./db.json');

let id = 4;

module.exports = {
    getAllhouses: function(req, res){
        res.status(200).send(houses)
    },

    createHouse: function(req, res){
        const { address, price, imageURL } = req.body;

        const newHouse = {id, address, price, imageURL};

        houses.push(newHouse);

        id++;

        res.status(200).send(houses);
    },

    deleteHouse: function(){},

    updateHouse: function(){}
}