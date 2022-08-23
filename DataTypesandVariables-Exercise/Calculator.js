function solve(a, oper, b) {
    let sum = 0;
    switch(oper){
      case "+":
        sum = a + b;
        break;
        case "-":
          sum = a - b;
          break;
          case "/":
            sum = a / b;
            break;
            case "*":
              sum = a * b;
              break;
  
    }
    
    console.log(sum.toFixed(2));
    
  }