function solve(gsix) {
    
    numeros(gsix);


   function numeros(joker) {
       for (let i = 0;i < joker.length;i++){
           let g = joker[i];
           let tu = "";
           tu += g;
           let hc = "";
           for (let k = tu.length - 1;k >= 0;k--){
               let poke = tu[k];
               hc += `${poke}`;
           }
           
           g == hc? console.log(true) : console.log(false);
       } 
       
       }
   }