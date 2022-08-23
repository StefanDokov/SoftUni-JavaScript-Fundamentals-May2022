function solve(y) {
    let da = y.toString();
    let u = da.length;
    let s = 0;
    let op = false;
    for (let i = 0;i < u;i++){
      let b = Number(da[i]);
       s += b;
    }
    let ui = s.toString();
    let k = ui.length;
    for (let a = 0;a < k;a++){
      let t = Number(ui[a]);
      
      if (t == 09)  {
        console.log(`${y} Amazing? True`);
        op = true;
      }
    }
    if (op === false){
     console.log(`${y} Amazing? False`);
    }
    
 }