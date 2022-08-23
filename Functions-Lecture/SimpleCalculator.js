function solve(n, m, oper) {
    let x = 0;
switch(oper){
    case "multiply":
               x = n * m;
               break;
               case "divide":
                   x = n / m;
                   break;
                   case "add":
                       x = n + m;
                       break;
                       case "subtract":
                           x = n - m;
                           break
}
console.log(x);

}