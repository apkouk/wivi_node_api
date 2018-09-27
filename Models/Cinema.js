var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CinemaSchema = new Schema({
    ObjectId : String,
    Id: String,
    Name: String,
    Tag: String,
    Address: String,
    Url: String,
    Telephone: String,
    Latitude: String,
    Longitude: String,
    NightPasses: String,
    MorningPasses: String,
    CheapDay: String,
    OnlineTickets: String,
    MapUrl: String,
    TownId: String,
    Town: String
});
module.exports = mongoose.model('Cinema', CinemaSchema);

