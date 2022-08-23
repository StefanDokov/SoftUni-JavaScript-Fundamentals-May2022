function solve(loses, helm, sword, shiel, armor) {
    let coun = 1;
    let cost = 0;
    let helmer= 0;
    let sworder = 0;
    let armorer = 0;
    let shiecount = 0;
    
    while (coun <= loses){
      
      if (coun % 2 == 0){
        helmer++;
  
      }
      if (coun % 3 == 0) {
        sworder++;
      }
      if (coun % 6 == 0) {
        
        shiecount++;
        if (shiecount % 2 == 0) {
          armorer++;
        }
  
      }
       
      
      coun++;
    }
    
      cost = (helmer * helm) + (sword * sworder) + (shiecount * shiel) + (armor * armorer);
    
      console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`);
  
  }