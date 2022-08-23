function solve(obje) {
    let nums = [];
    let opers = [];
    let ok = [];
    for (let i = 0;i < obje.length;i++){
        let omg = obje[i];
           if (typeof(omg) == 'number') {
            
            nums.push(omg);
           }
           else {
            opers.push(omg);
           }
        }
        if (opers.length < nums.length - 1){
            return console.log(`Error: too many operands!`);
        }
        if (opers.length >= nums.length) {
            return console.log(`Error: not enough operands!`);
        }
    
    
    obje.forEach(el => {
        if (typeof(el) == 'number'){
            ok.push(el);
        }
        else {
            let sec = ok.pop();
            let fir = ok.pop();
            let ope = el;
            switch(ope) {
                case "+":
                        ok.push(fir + sec);
                        break;
                    case "-":
                        ok.push(fir - sec);
                        break;
                      case "*":
                        ok.push(fir * sec);
                        break;
                        case "/":
                            ok.push(fir / sec);
                            break;  
            }
        }
    });     
    console.log(ok[0]);    
       
    
}