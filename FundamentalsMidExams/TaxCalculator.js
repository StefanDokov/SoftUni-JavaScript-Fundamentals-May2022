function solve(inputt) {
    let go = inputt.slice();
    let carz = go[0].split(">>");
    let index = 0;
    let finaltax = 0;
    let tax = 0;
    let extra = 0;
    while (index < carz.length){
       let machines = carz[index].split(" ");
       let type = machines[0];
       let years = Number(machines[1]);
       let kms = Number(machines[2]);
       
       switch(type){
           case "family":
                        tax = 50 - (years * 5);
                        extra = (Math.trunc(kms / 3000)) * 12;
                        tax += extra;
                        finaltax += tax;
                        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
                        break;
              case "heavyDuty":
                      tax = 80 - (years * 8);         
                      extra = (Math.trunc(kms / 9000)) * 14;
                      tax += extra;
                      finaltax += tax;
                      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
                      break;
                  case "sports":
                        tax = 100 - (years * 9);
                        extra = (Math.trunc(kms / 2000)) * 18;
                        tax += extra;
                        finaltax += tax;
                        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
                        break;
                      default:
                          console.log(`Invalid car type.`);
                          break;
  
       }
  
      index++
    }
     console.log(`The National Revenue Agency will collect ${finaltax.toFixed(2)} euros in taxes.`);
  }