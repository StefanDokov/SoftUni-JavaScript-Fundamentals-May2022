function solve(input) {
    let sus = []
    let s = input[0];
    let accounter = s.split(" ");
    for (let i = 1;i < input.length;i++){
       let doing = input[i];
        sus.push(doing);
    } 
    let k = 0;
    let oh = sus[k];
    k++;
    while (oh != "Play!"){
        let g = oh.split(" ");
        
        oh = sus[k];
        let a = g[0];
        let b = g[1];
        
       switch(a){
             case "Install":
                       if (accounter.includes(b)){
                         break;
                       }
                       accounter.push(b);
                       break;
                       case "Uninstall":
                        if (accounter.includes(b)){
                          accounter = accounter.filter(function(value){
                            return value != b;
                          });
                          
                        }
                        break;
                       case "Update":
                           if(accounter.includes(b)){
                            accounter = accounter.filter(function(value){
                              return value != b;
                            });
                            accounter.push(b);
                           }
                           break;
                           case "Expansion":
                             let ok = b.split("-");
                               let v = ok[0];
                               let c = ok[1];
                               if (accounter.includes(v)){
                                 let u = accounter.indexOf(v);
                                 let po = u + 1;
                                 let kiki = `${v}:${c}`;
                                 accounter.splice( po,0,kiki);
                                 }
                               break;
       }
       oh = sus[k];
        k++;
    }
    if (oh == "Play!"){
    console.log(accounter.join(" "));
    }
    }