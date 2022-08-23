function solve(obje) {
    let yes = {};
    obje.forEach (el => {
        let k = el.split(":");
        let m = k[0];
        let s = k[1];
        if (yes.hasOwnProperty(m)){
            yes[m] = s;
        }else {
        yes[m] = s;
        }
    });
    let keyso = Object.keys(yes);
    keyso.sort();
    let howm = keyso.length;
    for (let i = 0;i < howm;i++){
        console.log(`${keyso[i]} -> ${yes[keyso[i]]}`);
    }
    
       
}