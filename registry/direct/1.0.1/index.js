const shared = require('shared');

const mapToGood = (it) => {
    return shared.map(it, shared.isGood);
}

module.exports = {
    mapToGood,
};
