function join(arr, concatStr) {
    let retStr = '';
    
    for (let i = 0; i < arr.length - 1; i++) {
        retStr += (arr[i].toString() + concatStr);
    }

    // 避免 index out of range
    if(arr.length)
        retStr += arr[arr.length-1] + '';

    return retStr;
}

function repeat(str, times) {
    let retStr = '';
    for (let i = 0; i < times; i++){
        retStr += str;
    }
    return retStr;
}