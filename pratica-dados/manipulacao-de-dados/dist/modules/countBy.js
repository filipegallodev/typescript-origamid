export default function countBy(arr) {
    return arr.reduce((acc, item) => {
        if (acc[item]) {
            acc[item] += 1;
        }
        else {
            acc[item] = 1;
        }
        return acc;
    }, {});
}
//# sourceMappingURL=countBy.js.map