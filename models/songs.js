const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
songName : { type:  String, description: "Required Field", required: true },
artist : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('songs', songsSchema);