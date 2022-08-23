function solve(input) {
    let s = input.length - 1;
    let n = Number(input[s]);
    let ok = "";
    
    for (let i = 0;i < s;i++){
      if (i % n == 0){
         let you = input[i];
         ok += `${you} `;
      }
    }
    console.log(ok);
    
    
    
    }