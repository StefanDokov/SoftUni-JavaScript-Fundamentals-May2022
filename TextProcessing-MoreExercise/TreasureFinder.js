function partyTime(a) {
    let kode = a.shift().split(" ");
    let index = 0;
    let strings = a[index];
    index++;
    while (strings != "find") {
       let decode = "";
       let h = 0;
       for (let i of strings) {
           if (h == kode.length) {
               h = 0;
           }
           let you = kode[h];
           let g = i.charCodeAt(0) - you;
           decode += String.fromCharCode(g); 
           h++;
       }
       let startKind = 0;
       let endKind = 0;
       let starcor = 0;
       let endcor = 0;
      for (let k = 0;k < decode.length;k++) {
       if (decode[k] == "&") {
           startKind = k + 1;
           break;
       }
      }
      for (let o = decode.length - 1;o >= 0;o--) {
       if (decode[o] == ">") {
           endcor = o;
       }
       if (decode[o] == "<") {
           starcor = o + 1;
       }
       if (decode[o] == "&") {
           endKind = o;
           break;
       }
      }
      let vid = decode.substring(startKind, endKind);
      let wher = decode.substring(starcor, endcor);
      console.log(`Found ${vid} at ${wher}`);
   
       strings = a[index];
       index++;
    }
   
   }