function solve(n) {
    let sum = 0;
    let count = 0;
    
    for (let i = 1;i <= 100;i++){
         if (i % 2 !== 0){
           console.log(i);
           sum += i;
           count++;
           if (count == n){
             break;
           }
         }
    }
    
  console.log(`Sum: ${sum}`);
  }