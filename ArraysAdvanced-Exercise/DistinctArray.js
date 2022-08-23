function solve(input) {
    let go = input.slice();
    let nogo = [];
    for (let i = 0;i < go.length;i++){
       let newel = go[i];
       if (!nogo.includes(newel)){
          nogo.push(newel);
       }
       else {
         continue;
       }
    }
   console.log(nogo.join(" "));
      
   }