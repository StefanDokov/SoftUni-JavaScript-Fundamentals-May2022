function solve(str) {
  
    let al = str.toString();
    
    let s = al.length;
    let sum = 0;
    for (let i = 0;i < s;i++){
      let dudu = Number(al[i]);
      
      sum += dudu;
    }
    console.log(sum);
      
    
  }