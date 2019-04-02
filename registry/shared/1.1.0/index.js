let evenIsGood = true;

const each = (it, cb) => {
    for (let v of it) {
        cb(v);
    }
};

const map = (it, cb) => {
    const r = [];
    each(it, (v) => r.push(cb(v)));
    return r;
}

const isGood = (x) => {
    return evenIsGood ? (x % 2 == 0) : (x % 2 != 0);
};
const switchSides = () => {
    evenIsGood = !evenIsGood;
};

module.exports = {
    each,
    isGood,
    map,
    switchSides,
};
