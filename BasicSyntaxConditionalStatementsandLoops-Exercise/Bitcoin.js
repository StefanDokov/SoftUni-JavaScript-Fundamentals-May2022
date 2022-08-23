function solve(input) {
    let dayz = 0;
    let bit = 11949.16;
    let coincount = 0;
    let parichki = 0;
    let firstday = 0;
     let i = input.length;
     for (let s = 0;s < i; s++){
       dayz++;
     let gold = Number(input[s]);
     if (dayz % 3 == 0) {
       gold *= 0.7;
     }
     let pari = gold * 67.51;
     
     parichki += pari;
     
     if (parichki >= bit) {
       coincount++;
       parichki -= bit;
       while (parichki >= bit){
         coincount++;
         parichki -= bit;
       }
       if (firstday == 0){
         firstday = dayz;
       }
       
     }
     
   
   
     }
    console.log(`Bought bitcoins: ${coincount}`);
    if (coincount > 0) {
      console.log(`Day of the first purchased bitcoin: ${firstday}`);
    }
    console.log(`Left money: ${parichki.toFixed(2)} lv.`);
   
   }