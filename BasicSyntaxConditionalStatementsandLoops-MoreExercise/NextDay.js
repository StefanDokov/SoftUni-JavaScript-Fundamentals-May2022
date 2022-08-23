function solve(y , m, da) {
    let d = new Date (y, m - 1, da + 1);
    let dis = d.toISOString().substring(0, 10);
    
    let yea ="";
    let mon ="";
    let dayz ="";
    for (let i = 0; i < 4;i++){
      let s = Number(dis[i]);
      yea += s;
    }
    for (let k = 5; k < 7;k++){
      let u = Number(dis[k]);
      mon += u;
    }
    for (let m = 8; m < 10;m++){
      let o = Number(dis[m]);
      dayz += o;
    }
    let gu = Number(yea);
    let su = Number(mon);
    let op = Number(dayz);
  
    console.log(`${gu}-${su}-${op}`);
  }