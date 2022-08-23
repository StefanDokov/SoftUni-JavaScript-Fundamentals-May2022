function solve(inputt) {
    let go = [];
    for (let i = 0;i < inputt.length;i++){
      let who = inputt[i].split(" / ");
      let ime = who[0];
      let lvl = who[1];
      let itemi = who[2];
      
      let currHero = {
        
          Hero: ime,
          level: lvl,
          items: itemi
  
        };
      go.push(currHero);
    }
    
      let sortedOut = go.sort((a,b) => {
        return a.level - b.level;
      })
      sortedOut.forEach(el => {
         console.log(`Hero: ${el.Hero}`);
         console.log(`level => ${el.level}`);
         console.log(`items => ${el.items}`);
      })
    
  
  }