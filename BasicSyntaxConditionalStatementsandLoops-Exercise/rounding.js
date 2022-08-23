function solve(n, l) {
    let k = 0;
    if (l > 15) {
      k = 15;
    }
    else {
      k = l;
    }
    console.log(parseFloat(n.toFixed(k)));
  
  }