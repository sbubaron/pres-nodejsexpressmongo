var express = require('express');
var router = express.Router();

var quotesController = require('../controllers/quoteController');

var cors = require('cors');

var whitelist = ['https://xyz.abc.com', 'http://localhost:4000', '*'];

var corsOptions = function (req, callback) {
    var corsOptions;
    
    if (whitelist.indexOf(req.header('Origin')) !== -1 || whitelist.indexOf("*" !== -1)) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else{
        corsOptions = { origin: false } // disable CORS for this request
    }
    
    callback(null, corsOptions) // callback expects two parameters: error and options
}




router.use(cors(corsOptions));
router.options('*', cors(corsOptions));

router.get('/', cors(corsOptions), quotesController.findAll);
router.get('/by-character/:character', cors(corsOptions), quotesController.findByCharacter);  
router.get('/:id', cors(corsOptions), quotesController.findOne);

//create  
router.post('/', cors(corsOptions), quotesController.add);

//update
router.put('/:id', cors(corsOptions), quotesController.update);

//delete  
router.delete('/:id', cors(corsOptions), quotesController.remove);

module.exports = router;
