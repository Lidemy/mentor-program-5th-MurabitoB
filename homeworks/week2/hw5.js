function join(arr, concatStr) {
    let retStr = '';
    for (let item of arr) {
        retStr += `${item}${concatStr}`;
    }
    return retStr;
}

function repeat(str, times) {
    let retStr = '';
    for (let i = 0; i < times; i++){
        retStr += str;
    }
    return retStr;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
