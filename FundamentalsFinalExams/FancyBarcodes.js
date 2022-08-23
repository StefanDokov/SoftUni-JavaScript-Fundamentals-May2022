function bonus(input) {
    let spin = Number(input.shift());
    let patern = /(@#{1,})(?<item>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/;
    for (let i = 0; i < spin;i++){
      let me = input[i];
      let item = me.match(patern);
      if (item == null){
        console.log(`Invalid barcode`);
        continue;
      }
      let g = item[0].split("");
      let go = "";
      for (let b of g){
        if (b.charCodeAt(0) >= 48 && b.charCodeAt(0) <= 57){
           go += b;
        }
      }
       if (go == ""){
        console.log(`Product group: 00`)
       } else {
        console.log(`Product group: ${go}`)
       }
  
    } 
    
  }