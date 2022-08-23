function solve(m) {
    let g = Number(m);
    let op = "";
    op += g;
    let yes = [];
    let sumo = 0;
    let go = 0;
    while (sumo <= 5) {
    for (let i = 0;i < op.length;i++){
        yes.push(op[i]);
    }
    while (sumo <= 5) {
     for (let k = 0;k < yes.length;k++){
         go += Number(yes[k]);
     }
      let h = go / yes.length;
      if (h <= 5){
         yes.push(9);
         go = 0;
      }
      sumo = h;
 
 }
 if (sumo > 5) {
     let ui = Number(yes.join(""));
     console.log(ui);
 }
 }
 }