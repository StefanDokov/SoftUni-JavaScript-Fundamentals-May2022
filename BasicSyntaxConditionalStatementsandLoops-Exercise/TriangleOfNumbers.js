function solve(n) {
    let k = 1;
    let s ="";
    
    while (k <= n) {
      for (let i = 1;i <= k;i++){
        s += `${k} `;
      }
      console.log(s);
      s = "";
      k++;
    }
      
  }