function solve(input) {
    let g = input[0].slice().split(" ");
    for (let i = 1;i < input.length;i++){
     let dejstvie = input[i].slice().split(" ");
     let daj = dejstvie[0];
     let a = dejstvie[1];
     let b = Number(dejstvie[2]);
     switch(daj) {
         case "Add": 
               g.push(a);
             break;
               case "Remove": 
                  let you = g.filter((item) => item != a);
                  g = you;
                   break;
                   case "RemoveAt":
                     g.splice(a,1);
                     break;
                     case "Insert":
                         g.splice(b,0,a);
                         break;
    }
     
     }
     console.log(g.join(" "));
    }