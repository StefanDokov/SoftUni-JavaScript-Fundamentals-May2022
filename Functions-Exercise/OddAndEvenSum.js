function solve(m) {
    let p = "";
    p += m;
    let odSum = 0;
    let evenSum = -0;
     oddSum(p);
     
    function oddSum(j){
   for (let i = 0;i < j.length;i++){
       
       let s = Number(j[i]);
       
       if (s % 2 == 0){
           odSum += s;
       }
       else {
           evenSum += s;
       }
   }
     console.log(`Odd sum = ${evenSum}, Even sum = ${odSum}`)


    }
    
    
    



}