function solve(obje) {
    let yes = {};
    let ind = 0;
    let gost = obje[ind];
    ind++;
    let vip = [];
    let regu = [];
    
    while (gost != "PARTY") {
    if (!isNaN(gost[0])) {
        vip.push(gost);
    } else {
        regu.push(gost);
    }
       
      gost = obje[ind];
      ind++;
    }
    
    for (let i = ind;i < obje.length;i++){
        let mu = obje[i];
        if (vip.includes(mu)) {
            vip.splice(vip.indexOf(mu),1);
        } 
        if (regu.includes(mu)) {
            regu.splice(regu.indexOf(mu),1);
        } 
        
    }
    let count = vip.length + regu.length;
    console.log(count);
    for (let el of vip) {
        console.log(el);
    }
    for (let ele of regu) {
        console.log(ele);
    }
   
}