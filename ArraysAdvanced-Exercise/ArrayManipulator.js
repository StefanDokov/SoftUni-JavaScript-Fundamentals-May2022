function solve(input,doing) {
    let go = input.slice();
    let yes = doing.slice();
    for (let i = 0;i < yes.length;i++){
       let what = yes[i].split(" ");
       switch(what[0]){
             case "add":
                       let index = Number(what[1]);
                       let move = Number(what[2]);
                       go.splice(index,0,move);
                       break;
               case "addMany":
                       let indexI = Number(what[1]);
                       let y = [];
                       for (let p = 2;p < what.length;p++){
                         let s = Number(what[p]);
                         y.push(s);
                       }    
                       go.splice(indexI,0,...y); 
                       break;   
                   case "contains":
                       let sercho = Number(what[1]);
                       let s = go.indexOf(sercho);
                       console.log(s);
                       break;
                       case "remove":
                         let moveo = Number(what[1]);
                         go.splice(moveo,1);
                         break;
                         case "shift":
                           let shi = Number(what[1]);
                           while (shi > 0){
                             let op = go.shift();
                             go.push(op);
                             shi--;
                           }  
                           break;
                           case "sumPairs":
                             let ik = [];
                             let t = 0;
                             if (go.length % 2 == 0){
                               t = go.length / 2;
                             } else {
                               t = Math.trunc(go.length / 2);
                             }
                             while (t > 0) {
                             let u = Number(go[0]);
                             let m = Number(go[1]);
                             let h = u + m;
                             ik.push(h);
                             go.shift();
                             go.shift();  
                             t--;
                           }
                           if (go.length == 1){
                             ik.push(Number(go[0]));
                           }
 
                             go = ik;
                             break;
                             case "print":
                               return console.log("[ " + go.join(", ") + " ]");
                               
       }
      
    }
    
 }