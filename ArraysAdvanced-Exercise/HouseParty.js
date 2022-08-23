function solve(input) {
    let go = input.slice();
    let lista = [];
    for (let i = 0;i < go.length;i++){
       let koj = go[i].split(" ");
       if (koj.includes("not")){
          if (lista.includes(koj[0])){
             let newli = lista.filter(x => x != koj[0]);
             lista = newli;
          }
          else {
           console.log(`${koj[0]} is not in the list!`);
          }
       }
       else {
          if (lista.includes(koj[0])){
           console.log(`${koj[0]} is already in the list!`);
          }
          else {
             lista.push(koj[0]);
          }
       }
    }
    console.log(lista.join("\n"));
   }