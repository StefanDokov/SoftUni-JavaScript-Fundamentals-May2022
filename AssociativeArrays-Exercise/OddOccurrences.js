function solve(obje) {
    let yes = new Map();
    
   let go = obje.toLowerCase().split(" ");
   let you = "";
   for (let me of go) {
    
       if (yes.has(me)) {
        yes.set(me,yes.get(me) + 1);
       } else {
        yes.set(me, 1);
       }
   }
   
   for (let [n,p] of yes) {
       
       if (p % 2 != 0) {
         you += `${n} `;
       }
   }
      
      console.log(you);
}