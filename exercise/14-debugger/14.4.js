function calcAverage(arr) {
    var sum=0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];//sum is not defined you cant add something to undefined
    }
    return sum/arr.length;//have to devide by the arr.length- the number of elements
}
calcAverage([85, 90, 92]);