function solve(str) {
    let p = 0;
    for (let i = 1;i <= str;i++){
      
      let partone = i.toString();
      let k = partone.length;
      for (let s = 0;s < k;s++){
        let d = Number(partone[s]);
        
        p += d;
        
      }
     
      if (p == 5 || p == 7 || p == 11) {
      console.log(`${i} -> True`);
      p = 0;
      }
       else {
      console.log(`${i} -> False`);
      p = 0;
    }
    }
  }