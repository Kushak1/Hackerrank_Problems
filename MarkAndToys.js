    function maximumToys(prices, k) {
        
    let count = 0;

    let sorted = prices.sort( (a,b) => {return a - b} );

    for(let i = 0;i<sorted.length;i++) {
        if(k - sorted[i] >= 0) {
            k -= sorted[i];
            count++;
        }
    }
    return count;
}
