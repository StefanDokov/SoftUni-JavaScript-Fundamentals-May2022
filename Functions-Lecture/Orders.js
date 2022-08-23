function solve(n, m) {
    let p = 0;
   switch(n){
       case "water":
                   p = 1;
                   break;
                   case "coffee":
                       p = 1.5;
                       break;
                       case "coke":
                           p = 1.4;
                           break;
                           case "snacks":
                               p = 2;
                               break;
   }
   let x = p * m;
   console.log(x.toFixed(2));
   
   }