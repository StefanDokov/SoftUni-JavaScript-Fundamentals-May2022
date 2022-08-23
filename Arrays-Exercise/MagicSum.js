function solve(input, n) {
  
    let beso = [];
     for (let i = 0;i < input.length;i++){
      let s = Number(input[i]);
       for (let k = input.length - 1;k > i;k--){
        
         
         let b = Number(input[k]);
         if (s + b == n){
            beso.push(s);
            beso.push(b);
            
         }
         if (beso.length > 0 && beso.length < 3){
          console.log(beso.join(" "));
          beso = [];
          }
       }
       
       
       
     }
     
    }