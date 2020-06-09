function luckBalance(k, contests) {
    let luck = 0;
    contests.sort(( a, b ) => b[0] - a[0]);

    for( let i=0; i<contests.length; i++ ){
        if( contests[i][1] ==0 ){
            luck += contests[i][0];
        }else if( contests[i][1] == 1 && k>0 ){
            luck += contests[i][0];
            k--;
        }else{ luck-=contests[i][0];}
    }

    return luck;
}
