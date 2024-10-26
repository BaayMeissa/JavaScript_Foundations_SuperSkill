function factorial(number) {
    n = 1;
    for (i=1; i<=number; i++){
        n*=i;
    }
    return n;
}

console.log(factorial(4));