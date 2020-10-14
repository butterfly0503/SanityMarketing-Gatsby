export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getRandomData(array, count) {
    // Make a copy of the array
    var tmp = array.slice(array);
    var ret = [];
    count = (count > array.length || count == 0) ? array.length : count;

    for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * tmp.length);
        var removed = tmp.splice(index, 1);
        // Since we are only removing one element
        ret.push(removed[0]);
    }
    return ret;
}