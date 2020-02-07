const ProdPraseLog = require('../models/prodparselog');

module.exports.saveProdParseLog = (parseLog) => {
    var log = new ProdPraseLog(parseLog);
    log.save();
};