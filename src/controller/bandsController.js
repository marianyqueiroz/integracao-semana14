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

const deleteBand = (req, res) => {
    const parametros = req.query
    bands.deleteOne(parametros, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Band successfully removed"})
        }
    })
}

const putBand = (req, res) => {
    const id = req.params.id
    bands.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ message : "Band updated successfully"});
        };
    });
};

module.exports = {
    getAll,
    postBands,
    putBand,
    deleteBand
};