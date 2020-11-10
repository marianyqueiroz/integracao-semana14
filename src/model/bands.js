const mongoose = require("mongoose");

const bandsSchema = new mongoose.Schema({
        id: { type : Number },
        banda: { type : String }, 
        inicio: { type : Number },
        genero: { type : String }, 
        musicaPreferida: { type : String }
}, {
        version: false
});

const bands = new mongoose.model("bands", bandsSchema);

module.exports = bands;