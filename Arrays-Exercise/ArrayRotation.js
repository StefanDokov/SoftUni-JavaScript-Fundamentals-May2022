function solve(input, n) {
   

    for (let i = 0;i < n;i++) {
       let k = Number(input[0]);
       input.shift();
       input.push(k);
 
 
 
 
    }
  console.log(input.join(" "));
 
 
 }