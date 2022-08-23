function solve(a, b, c) {
    let high = 0;
    let low = 0;
    let mid = 0;
    
      high = a;
      
        if (b > high){
           mid = high;
           high = b;
        }
        else {
          mid = b;
        }
      if (c > high) {
        
        low = mid;
        mid = high;
        high = c;
      }
      else {
        if (c > mid){
        low = mid;
        mid = c;
      }
      else {
        low = c;
      }
     
    }
      
    
    console.log(high);
    console.log(mid);
    console.log(low);
    
  
  }