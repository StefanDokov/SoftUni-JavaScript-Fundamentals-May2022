function solve(n, m) {
    let sumAr = [];
    let sumer = [];
    let sum = 0;
    for (let i = 1;i < m;i++){
       sumAr.push(0);
    }
    sumAr.push(1);
    sumer.push(1);
    for (let g = 1;g <= n - 1;g++){
       for (let y = 0;y < sumAr.length;y++){
           let you = Number(sumAr[y]);
           sum += you;
       }
       
       sumer.push(sum);
       
       sumAr.shift();
       sumAr.push(sum);
       sum = 0;
    }
     console.log(sumer.join(" "));
   }