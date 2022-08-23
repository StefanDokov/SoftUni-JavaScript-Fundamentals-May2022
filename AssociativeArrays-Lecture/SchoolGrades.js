function solve(obje) {
    let yes = {};
    
    obje.forEach (el => {
        let k = el.split(" ",1);
        let m = k[0];
        let s = el.replace(`${m} `,"").split(" ").map(Number);
        if (yes.hasOwnProperty(m)){
            let o = s.length;
            while (o > 0){
                let h = s.shift();
                yes[m].push(h);
                o--;
            }
            
        }else {
           yes[m] = s;
        }
    });
    for (let t in yes) {
        let j = yes[t];
        let sum = 0;
        let b = j.length;
        for (let z = 0;z < b;z++){
            sum += j[z];
        }
        let go = sum / b;
        yes[t] = go.toFixed(2);
    }
    let keyso = Object.keys(yes);
    keyso.sort();
    let howm = keyso.length;
    for (let i = 0;i < howm;i++){
        console.log(`${keyso[i]}: ${(yes[keyso[i]])}`);
    }
       
}