function encryption($s) {
    
    $arr = str_split($s);
    
    $number = sqrt(sizeof($arr));
    $numberRounded = round($number);
    if($numberRounded>$number){
        
        $smallerNumber = floor($number);
        $biggerNumber = $numberRounded;
        
    }else{
        
        $smallerNumber = $numberRounded;
        $biggerNumber = ceil($number);
        
    }
    
    $arrFor = array();

    for($i = 0; $i < $biggerNumber; $i++){
        
        for($x=0; $x < $biggerNumber; $x++){
            $arrFor[$i][$x] = $arr[0];
            array_shift($arr);
        }
        
    }
    
    $finalWord = array();
    for($i = 0; $i < $biggerNumber; $i++){
        
        for($x=0; $x < $biggerNumber; $x++){
            
            $finalWord[$i][$x] = $arrFor[$x][0];
             array_shift($arrFor[$x]);
             
        }
        
    }

    for($i = 0; $i<$biggerNumber; $i++){
        
        $finalWord[$i] = implode("",$finalWord[$i]);
    }
    
    return(implode(" ",$finalWord));


}