function solve(m) {
    let g = Number(m);
     let sumo = 0;
     
     for (let i = 1;i < g;i++){
         if (g % i == 0){
             sumo += i;
         }
     }
     if (g == sumo){
         console.log(`We have a perfect number!`);
     }
     else {
         console.log(`It's not so perfect.`);
     }
     
 
 }