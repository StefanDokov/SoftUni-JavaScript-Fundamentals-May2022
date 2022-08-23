function partyTime(a) {
    let go = a.split(" ");
    let sum = 0;
    for (let i of go) {
      let divMul = i.charCodeAt(0);
      let minPlu = i.charCodeAt(i.length - 1);
      let chislo = Number(i.substring(1,i.length - 1));
      if (divMul >= 65 && divMul <= 90) {
          chislo = (chislo / (divMul - 64));
      } 
      if (divMul >= 97 && divMul <= 122) {
          chislo = (chislo * (divMul - 96));
      }
      if (minPlu >= 65 && minPlu <= 90) {
          chislo = (chislo - (minPlu - 64));
      } 
      if (minPlu >= 97 && minPlu <= 122) {
          chislo = (chislo + (minPlu - 96));
      }
      sum += chislo;
    }
    console.log(sum.toFixed(2))
  }