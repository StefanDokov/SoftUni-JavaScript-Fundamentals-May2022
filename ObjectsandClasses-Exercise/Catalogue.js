function solve(inputt) {
    let go = [];
    inputt.forEach(el => {
      let [ime, kol] = el.split(" : ");
      let currE = {
        name: ime,
        amount: kol
      }
      go.push(currE);
    });
     let sorted = go.sort((a,b) => {
      return (a.name).localeCompare(b.name);
     });
        let g = "m";
     sorted.forEach((ele) => {
        
        let h = ele.name[0];
        if (g != h) {
          console.log(h);
          g = h;
        }
        console.log(`  ${ele.name}: ${ele.amount}`);
        
     })
  
  }