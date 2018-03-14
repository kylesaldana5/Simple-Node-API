const { getAll } = require('../models/Director');

module.exports.getDIrectors = (req, res, next) => {
    getAll()
        .then((direx) => {
            res.status(200).json(direx);
        })
        .catch((err) => next(err));

};
