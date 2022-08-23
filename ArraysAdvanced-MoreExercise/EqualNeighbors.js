function solve(input) {
    let k = 0;
    
   for (let i = 0; i < input.length - 1;i++){
   
     let g = input[i];
     let h = input[i + 1];
     
     for (let j = 0;j < g.length - 1;j++){
       let oni = g[j];
       let twoni = g[j + 1];
       if (oni == twoni){
         k++;
       }
     }
 
     if (i == (input.length - 2)){
     for (let t = 0;t < h.length - 1;t++){
       let moni = h[t];
       let stwoni = h[t + 1];
       if (moni == stwoni){
         k++;
       }
     }
   }
     
     for (let el = 0;el < g.length;el++){
       for (let le = 0;le < h.length;le++){
         let ko = g[el];
         let ok = h[le];
         if (ko == ok){
          if (el == le) {
           k++;
         }
         }
         
       }
       
     }
     
   }
   console.log(k)
 
 }