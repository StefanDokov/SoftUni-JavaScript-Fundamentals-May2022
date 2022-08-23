function partyTime(a) {
    let go = a[0];
    let ho = a[1];
    let sum = 0;
    for(let i of go){
      
        if (i == i.toUpperCase() && ho == "UPPERCASE") {
          let me = i.charCodeAt(0);
          if (me >= 65 && me <= 90){
          sum += me;
          }
        }
        if (i == i.toLowerCase() && ho == "LOWERCASE"){
          let t = i.charCodeAt(0);
          if (t >= 97 && t <= 122){
          sum += t;
          }
        }
        
    }
    
      
    console.log(`The total sum is: ${sum}`);
    
  }