function solve(input) {
    let newAr = input;
   
    let sumAr = [];
    let m = Math.min(...newAr);
    sumAr.push(m);
    let b = newAr.indexOf(m);
    newAr.splice(b,1);
    let g = Math.min(...newAr);
    sumAr.push(g);
    console.log(sumAr.join(" "));
   }