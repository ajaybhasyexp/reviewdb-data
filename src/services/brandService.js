const Brand = require('../models/brand');

saveBrand = (brand) => {
    var prodBrand = new Brand(brand);
    prodBrand.updated = new Date();
    prodBrand.created = new Date();
    prodBrand.save();

}

module.exports.checkAndSaveBrand = (brand) => {
    Brand.findOne({ name: brand.name }).then((prodBrand) => {
        if (!prodBrand) {
            saveBrand(prodBrand);
        } else {
            prodBrand.updated = new Date();
            prodBrand.imageUrl = brand.imageUrl;
            prodBrand.tags = brand.tags;
            prodBrand.save();
        }

    });
}