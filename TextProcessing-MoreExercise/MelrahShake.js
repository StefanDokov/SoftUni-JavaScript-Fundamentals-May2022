function partyTime(a) {
    let sent = a[0];
    let shak = a[1];
    let cont = 0;
   let pop = false;
    while (shak.length >= 1) {
   
   if (sent.includes(shak)){
       if (cont == 0) {
       sent = sent.replace(shak,"");
       cont++;
       } 
       if (cont == 1) {
           let ko = sent.lastIndexOf(shak);
           let starto = sent.substring(0,ko);
           let endo = sent.substring(ko + shak.length);
           sent = starto + endo;
           pop = true;
       }
    } else {
       break;
    }
    
    if (pop) {
       console.log(`Shaked it.`);
       shak = shak.replace(shak.charAt(shak.length / 2), "");
       cont = 0;
       pop = false;
    }
    
   }
   
    console.log(`No shake.`);
    console.log(sent);
   
   }