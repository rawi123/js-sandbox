function getSum(arr1, arr2) {
    let sum = 0;//its written as const and then its tried to change - have to change to let
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    //have to return or log something
}
getSum([1, 2, 3], [5, 66, 23]);//in the debug this does not send the right info for the function used step by step in chrome
//the bug is that the function should recive 2 elements and for that to happen there should be a , betwee the element
//not only that but also the function sends an object that does not exist [][] there is no such thing