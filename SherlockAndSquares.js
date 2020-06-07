function squares(a, b) {

    let square = 0;
    let i = 1;
    let count = 0;

    while (square <= b) {
        square = i * i;
        if (square >= a && square <= b) {
            count += 1;
        }
        i += 1;
    }
    
    return count;
}