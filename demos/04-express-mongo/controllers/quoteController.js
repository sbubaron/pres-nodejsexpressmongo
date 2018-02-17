var mongoose = require('mongoose'), 
QuoteModel = mongoose.model('Quote'); //this will create a Quote Collection

//returns all quotes in db
exports.findAll = function(req, res) {

    //the empty object is equivelant to select * from
    QuoteModel.find({}, function(err, quotes) {
        if (err) {
            throw new Error(err);
        }

        res.json(quotes);
    });

};

exports.findByCharacter = function(req, res) {
    QuoteModel.find({character: req.params.character}, function(err, quotes) {
        if (err) {
            throw new Error(err);
        }
        
        res.json(quotes);
    });
};

exports.findOne = function(req, res) {
    QuoteModel.findById(req.params.id, function(err, quotes) {
        if (err) {
            throw new Error(err);
        }
        res.json(quotes);
    });
};

exports.add = function(req, res) {
    var document = new QuoteModel(req.body);
    document.save(function (err, quote) {
        if (err) {
            throw new Error(err);
        }
        
        res.json(quote);
    });
};

exports.update = function(req, res) {
    QuoteModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function(err, quote) {
        if (err) {
            throw new Error(err);
        }

        res.json(quote);
    });
};

exports.remove = function(req, res) {
    QuoteModel.findByIdAndRemove(req.params.id, function(err, quote) {
        if (err) {
            throw new Error(err);
        }
        res.json(quote);
    });
};