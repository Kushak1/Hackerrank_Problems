function countApplesAndOranges($s, $t, $a, $b, $apples, $oranges) {
    $numberOfApples = 0;
    $numberOfOranges = 0;
    for ($i = 0; $i < count($apples); $i++)  {
        
            $dot = $a+$apples[$i];
            if($dot >= $s && $dot <= $t){
                
                $numberOfApples++;
                
            }
            
        }
        
    for ($i = 0; $i < count($oranges); $i++)  {
        
            $dot = $b+$oranges[$i];
            if($dot<=$t && $dot>=$s){
                
                $numberOfOranges++;
                
            }
            
    }
    print($numberOfApples);
    print("\n");
    print($numberOfOranges);

}