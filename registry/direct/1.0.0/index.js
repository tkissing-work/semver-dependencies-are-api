const shared = require('shared');

const mapToGood = (it) => {
    const r = [];

    shared.each(it, (v) => {
        r[r.length] = shared.isGood(v);
    });

    return r;
}

module.exports = {
    mapToGood,
};
