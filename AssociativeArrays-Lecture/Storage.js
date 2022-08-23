function solve(obje) {
    let yes = {};
    obje.forEach (el => {
        let k = el.split(" ");
        let m = k[0];
        let s = Number(k[1]);
        if (yes.hasOwnProperty(m)){
            yes[m] += s;
        }else {
        yes[m] = s;
        }
    });
    for (let i in yes) {
        console.log(`${i} -> ${yes[i]}`);
    }
    
       
}