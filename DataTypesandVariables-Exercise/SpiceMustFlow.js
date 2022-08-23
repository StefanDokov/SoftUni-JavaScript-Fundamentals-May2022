function solve(a) {
    let day = 0;
    
    let sum = 0;
    
    while (a >= 100) {
      
       day++;
       sum += a;
       
       sum -= 26;
       
       a -= 10;
       
       
    }
    if (sum >= 26) {
      
      sum -= 26;
    }
      console.log(day);
      console.log(sum);
      
      
    }