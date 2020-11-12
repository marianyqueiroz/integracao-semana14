const bands = require("../model/bands");

const getAll = (req, res) => {
    bands.find(function (err, bands) {
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send(bands);
        };
    });
};

const postBands = (req, res) => {
    let band = new bands(req.body);

    band.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(201).send({ message : "Band successfully included!"});
        };
    });
};

module.exports = {
    getAll,
    postBands
};