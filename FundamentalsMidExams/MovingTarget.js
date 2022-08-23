function solve(inputt) {
    let go = inputt.slice();
    let targets = go.shift().split(" ").map(Number);
    let index = 0;
    let action = go[index];
    index++;
 
    while (action != "End"){
     let act = action.split(" ");
     let dothis = act[0];
     let strike = Number(act[1]);
     let indexo = Number(act[2]);
     switch(dothis){
           case "Shoot":
                        if (strike < 0 || strike >= targets.length){
                         break;
                        }
                        let get = targets[strike];
                        get -= indexo;
                        if (get <= 0){
                         targets.splice(strike,1);
                        }else {
                        targets[strike] = get;
                        }
                        break;
                 case "Add":
                       if (strike < 0 || strike >= targets.length) {
                         console.log(`Invalid placement!`);
                         break;
                       }  
                       targets.splice(strike,0,indexo); 
                       break;
                       case "Strike":
                         let start = strike - indexo;
                         let endo = strike + indexo;
                         let exnd = (endo - start) + 1;
                         if (start < 0 || start >= targets.length || endo < start || endo >= targets.length){
                           console.log(`Strike missed!`);
                           break;
                         }   
                         targets.splice(start,exnd);
                         break;
 
     }
     action = go[index];
     index++;
    }
   if (action == "End"){
     return console.log(targets.join("|"));
   }
 
 
 
  } 