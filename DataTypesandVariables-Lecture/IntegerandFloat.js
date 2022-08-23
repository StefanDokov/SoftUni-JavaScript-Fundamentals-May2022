function solve(y, n, m) {
    let sum = y + n + m;
    let yes = "";
    if (sum % 1 == 0){
      yes = "Integer";
    }
    else {
      yes = "Float"
    }
    
    console.log(`${sum} - ${yes}`);
  }