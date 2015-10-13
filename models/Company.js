var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: String,
    industry: String,
    mascot: String,
    employees: Number,
    date_founded: Date,
    non_profit: Boolean,
    market_cap: Number,
    ceo: {
        name: String,
        since: Date,
        salary: Number,
        felon: Boolean
    }

});


var Company = mongoose.model('Company', companySchema);

module.exports = Company;