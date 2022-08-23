function solve(m, n, o) {
    let arrFull = [];
    arre(m,n,o);
    lowes(arrFull);
    function arre(m, n, o) {
  
        arrFull.push(m);
        arrFull.push(n);
        arrFull.push(o);
        return arrFull;
    }
    function lowes(arre){
        let k = 1;
        let lowest = 0;
        let s = 0;
    for (let i = 0;i < arre.length;i++){
        s = Number(arre[i]);
        if (k < 2){
            lowest = s;
            k++;
        }
        if (s < lowest){
            lowest = s;
        }
        else {
            continue;
        }
           
    }
      console.log(lowest);
    }
  
    
  }