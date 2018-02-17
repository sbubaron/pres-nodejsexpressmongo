var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//defines a simple schema for storing quotes and the character that says it
var QuoteSchema   = new Schema({
    quote: String,
    character: String
});

module.exports = mongoose.model('Quote', QuoteSchema);