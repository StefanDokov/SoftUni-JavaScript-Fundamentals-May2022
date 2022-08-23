function solve(obje) {
    
    let go = {};
    for (let i of obje) {
        let where = i.split(" > ");
        let contr = where[0];
        let tow = where[1];
        let cos = Number(where[2]);
        if(!go.hasOwnProperty(contr)) {
            go[contr] = {};
        }
        if (!go[contr].hasOwnProperty(tow)){
            go[contr][tow] = Number.POSITIVE_INFINITY;

        } 
        if (go[contr].hasOwnProperty(tow)){
            if (go[contr][tow] > cos) {
                go[contr][tow] = cos;
            }

        } 
        
    }
     let sorted = Object.keys(go).sort((a,b) => {
        
        return a.localeCompare(b);
     });

     for (let u of sorted) {
        let resu = "";
        resu += (u + " -> ");
     
     let sortedbyprice = Object.keys(go[u]).sort((t1,t2) => {
        
        return go[u][t1] - go[u][t2];
     });
     for (let omg of sortedbyprice) {
        resu += (omg + " -> ");
        resu += (go[u][omg] + " ");
     }
    
       console.log(resu)
    }
}