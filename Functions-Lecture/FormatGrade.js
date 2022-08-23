function solve(n) {
    let k = Number(n);
    let s = "";
   
    if (k < 3){
        s = "Fail";
        k = 2;
        console.log(`${s} (${k})`);
    }
      if (k >= 3 && k < 3.50){
          s = "Poor";
          console.log(`${s} (${k.toFixed(2)})`);
      }  
      if (k >= 3.50 && k < 4.50){
          s = "Good";
          console.log(`${s} (${k.toFixed(2)})`);
      }
     if (k >= 4.50 && k < 5.50){
         s = "Very good";
         console.log(`${s} (${k.toFixed(2)})`);
     }
     if (k >= 5.50){
         s = "Excellent";
         console.log(`${s} (${k.toFixed(2)})`);
     }
    
   
   
   }