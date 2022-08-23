function solve(input) {
    let sumAr = [];
    for (let i = 0;i < input.length;i++){
       if (i % 2 != 0){
           let s = Number(input[i]);
           let b = s * 2;
           sumAr.unshift(b);
       }
    }
    console.log(sumAr.join(" "));
   }