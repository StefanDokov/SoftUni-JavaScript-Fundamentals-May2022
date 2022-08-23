function solve(input) {
    let ok = [];
    let high = Number(input[0]);
    ok.push(high);
   for (let i = 1;i < input.length;i++){
     let op = Number(input[i]);
     if (op >= high){
       ok.push(op);
       high = op;
     }
   }
  console.log(ok.join(" "));
  }