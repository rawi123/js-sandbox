function findSmallest(a, b, c) {//three perameters cant go together should be and between &&
    
    if (a > b && b > c || b > a && a > c) {//check wether a is the biggest and c is the smallest but does not check if b is the biggest and a is smaller than b
        return c;
    }
    if (a > c && c > b || c > a && a > b) {//same thing
        return b;
    }
    {
        return a;
    }
}

console.log(findSmallest(52, 66, 2));//not defined have there is an l missing