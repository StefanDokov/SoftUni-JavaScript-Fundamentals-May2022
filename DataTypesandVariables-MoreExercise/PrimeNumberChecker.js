function solve(a) {
    let s = "";
    if (a === 1) {
      s = "true";
    }
    else if (a > 1) {
      for (let i = 2; i < a;i++){
        if (a % i == 0) {
          s = "false";
          break;
        }
        else {
          s = "true";
        }
      }
    }
    
    console.log(s);
  
  }