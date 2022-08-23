function solve(input) {
    let dk = [];
    let p = Number(input[0])
    for (let i = 0;i < p;i++){
      
      dk.push(0);
    }
    let didi = input[1];
    let s = didi.split(" ");
    for (let y = 0;y < p;y++){
      let o = Number(s[y]);
      
      if (o >= 0 && o < dk.length){
      dk[o] = "1";
      }
  }
  for (let j = 2;j < input.length;j++){
      let t = input[j];
      let g = t.split(" ");
      let ino = Number(g[0]);
      let dvi = g[1];
      let tri = Number(g[2]);
      
      if (dk[ino] != "1" || ino < 0 || ino > dk.length){
        continue;
      }
      dk[ino] = "0";
      if (tri < 0) {
         tri = Math.abs(tri);
         if (dvi == "right"){
           dvi = "left";
         }
         else if (dvi == "left"){
           dvi = "right";
         }
      }
               
      if(dvi == "left"){
                        let bao = ino - tri;
                        if (dk[bao] == "1"){
                          bao = bao - tri;
                        }
                        
                        dk[bao] = "1";
                         
                      
        }
      if (dvi == "right"){
                           let imo = ino + tri;
                           
                           if (dk[imo] == "1"){
                             imo = imo + tri;
                           }
                             
                              dk[imo] = "1";
                           
                            
                        }
      
  }
   let huh = dk.splice(0,p);
   console.log(huh.join(" "));
  }