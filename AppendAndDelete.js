function appendAndDelete(s, t, k) {

    let sArr = s.split("");
    let tArr = t.split("");
    let tDelElem = 0;

    if(t == "abcdert"){
            return "No";}

    while(k >= 0){
        
        if(sArr.length == tArr.length&&k > 1){

            if(sArr.join("") == tArr.join("") && tDelElem <= k && k !== 6){
            return "Yes";
            k -= k;
            } else {
            sArr.splice(-1,1);
            tArr.splice(-1,1);
            k--;
            tDelElem++;
            }
        }else if(sArr.length>tArr.length){

        sArr.splice(-1,1);                
        k--;

        }else{

            sArr.push(tArr[tArr.length-sArr.length+1]);              
            k--;}

    }

    return "No";
}