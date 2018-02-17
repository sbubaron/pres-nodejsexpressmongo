var express = require('express');
var router = express.Router();

//the controller contains the callback functions that are passed to these routes.
var quotesController = require('../controllers/quoteController');

//cors stands for Cross-origin resource sharing
//by default, access to resources is restricted only to requests coming from the exact same domain
//subdomains and different ports are NOT granted access. 
var cors = require('cors');

//we can provide a list of whitelisted domains
//or use * to allow any domain. 
var whitelist = ['https://xyz.abc.com', 'http://localhost:4000', '*'];


//quick check to see if the req headers origin is from an allowed domain, if it is, we let them through, if not, sorry charlie.
var corsOptions = function (req, callback) {
    var corsOptions;
    
    if (whitelist.indexOf(req.header('Origin')) !== -1 || whitelist.indexOf("*" !== -1)) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else{
        corsOptions = { origin: false } // disable CORS for this request
    }
    
    callback(null, corsOptions) // callback expects two parameters: error and options
}

//tell our routes to check CORS status.
router.use(cors(corsOptions));
//certain CORS requests are considered 'complex' and require an initial OPTIONS request (called the "pre-flight request"). 
//An example of a 'complex' CORS request is one that uses an HTTP verb other than GET/HEAD/POST (such as DELETE) or that uses custom headers. 
//To enable pre-flighting, you must add a new OPTIONS handler for the route you want to support:
router.options('*', cors(corsOptions));

//defines a route that gets/returns all our quotes.
router.get('/', cors(corsOptions), quotesController.findAll);

//defines a route that gets returns all our quotes by character
router.get('/by-character/:character', cors(corsOptions), quotesController.findByCharacter);  

//defines a route that gets a single quote by its ID
//the /:id represents a parameter contained in the URL
router.get('/:id', cors(corsOptions), quotesController.findOne);

//creates a new quote   
router.post('/', cors(corsOptions), quotesController.add);

//updates/replaces an existing quote identified by the id using data in body
router.put('/:id', cors(corsOptions), quotesController.update);

//deletes the quote specified by the provided id
router.delete('/:id', cors(corsOptions), quotesController.remove);

module.exports = router;
