function solve(input) {
   
    let xone = Number(input[0]);
    let yone = Number(input[1]);
    let xtwo = Number(input[2]);
    let ytwo = Number(input[3]);
  
    let firsto = [];
    let secondo = [];
    let zerod = [];
    firsto.push(xone);
    firsto.push(yone);
    secondo.push(xtwo);
    secondo.push(ytwo);
    zerod.push(0);
    zerod.push(0);
    check(firsto,zerod);
    check(secondo,zerod);
    check(firsto,secondo);
    function check(yeso,neso) {
      let xxone = Number(yeso[0]);
      let yyone = Number(yeso[1]);
      let xxtwo = Number(neso[0]);
      let yytwo = Number(neso[1]);
  
      let diff = Math.sqrt((xxtwo - xxone)*(xxtwo - xxone) + (yytwo - yyone)*(yytwo - yyone));
      let op = yeso.join(", ");
      let og = neso.join(", ");
      let full = `{${op}} to {${og}}`;
      if (Number.isInteger(diff)) {
          console.log(`${full} is valid`);
      } else {
          console.log(`${full} is invalid`);
      }
    }
    
  
  }