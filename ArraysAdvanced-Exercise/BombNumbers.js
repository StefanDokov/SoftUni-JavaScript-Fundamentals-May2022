function solve(input,bomber) {
    let bombi = input.slice().map(Number);
    let spec = Number(bomber[0]);
    let splash = Number(bomber[1]);
    let g = splash * 2;
    let sum = 0;
    while (bombi.includes(spec)){
    erase(bombi);
    function erase (arre){
    let s = arre.indexOf(spec);
    let you = s - splash;
    let me = g + 1;
    if (you < 0){
      you = 0; 
      me = g;
    }
    if (me + you > arre.length){
      me = arre.length;
    }
    if (splash != 0){
       let sumi = arre.splice(you,me);
       } else {
        let sumi = arre.splice(you, 1);
       }
          return arre;
    }
  
  }
    let res = bombi.map(x => sum += x);
    console.log(sum);
  }