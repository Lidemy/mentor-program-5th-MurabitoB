function join(arr, concatStr) {
    let retStr = '';
    for (let item of arr) {
        retStr += `${item}${concatStr}`;
    }
    return retStr.slice(0,retStr.length-1);
}

function repeat(str, times) {
    let retStr = '';
    for (let i = 0; i < times; i++){
        retStr += str;
    }
    return retStr;
}