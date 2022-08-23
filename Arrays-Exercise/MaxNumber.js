function solve(input) {
    let beso = [];
    let big = Number(input[input.length - 1]);
    let gi = 0
    
    for (let i = input.length - 2;i >= 0;i--){
     
        let s = Number(input[i]);
        if (gi < 1) {
          beso.push(big);
          gi++;
        }
        if (big < s) {
            beso.push(s);
            big = s; 
         }
     
     }
  
     let go = "";
     for (let p = beso.length - 1;p >= 0;p--){
         let op = Number(beso[p]);
         go += `${op} `;
     }
  console.log(go);
  
  }