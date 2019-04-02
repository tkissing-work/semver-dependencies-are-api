let evenIsGood = true;

const each = (it, cb) => {
    for (let v of it) {
        cb(v);
    }
};

const isGood = (x) => {
    return evenIsGood ? (x % 2 == 0) : (x % 2 != 0);
};
const switchSides = () => {
    evenIsGood = !evenIsGood;
};

module.exports = {
    each,
    isGood,
    switchSides,
};
