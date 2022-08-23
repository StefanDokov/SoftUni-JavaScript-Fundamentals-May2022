function solve(obje) {
    let yes = {};
    obje.forEach (el => {
        let k = el.split(" ");
        let m = k[0];
        let s = k[1];
        if (yes.hasOwnProperty(m)){
            console.log(`Conflict on ${[m]}!`);
        }else {
        yes[m] = s;
        console.log(`Scheduled for ${[m]}`);
        }
    });
    for(let keyo in yes) {
        console.log(`${keyo} -> ${yes[keyo]}`);
    }
     
       
}