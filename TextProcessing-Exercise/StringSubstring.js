function partyTime(a,b) {
    let go = b.split(" ");
    for (let p of go) {
    if (a == p.toLowerCase()) {
       return console.log(a);
    } 
       
    
   }
   console.log(`${a} not found!`);
}