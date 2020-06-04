function staircase(n) {
    let empty = n - 1;
    let x = 1;
    
    while( x !== n + 1){
        console.log(`${" ".repeat(empty)}${"#".repeat(x)}`);
        x++;
        empty--;
    }
}