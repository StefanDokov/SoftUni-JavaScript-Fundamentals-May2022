function solve(obje) {
    let yes = {};
    let keycoun = 0;
    let valcoun = 0;
    
   let go = obje.shift().split(" ");
   for (let i = 0;i < go.length;i++){
      yes[go[i]] = 0;
   }
   for (let me of obje) {
       if (yes.hasOwnProperty(me)) {
        yes[me] += 1;
       }
   }
   let sorted = Object.fromEntries(Object.entries(yes).sort(([,a],[,b]) => 
    b - a));

   for (let k in sorted) {
     console.log(`${k} - ${yes[k]}`);
   }
       
}