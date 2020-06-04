function extraLongFactorials(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++){

        if(Number.isSafeInteger(fact * i)){
            fact = fact * i;
        }
        else {
            
            let factxi = "0";  
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = factxi; 
        }
            
    }
    console.log(fact);
}