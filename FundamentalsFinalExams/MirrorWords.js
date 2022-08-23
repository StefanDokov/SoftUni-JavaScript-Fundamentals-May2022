function bonus(input) {
    let me = input[0];
    let pattern = /([@|#])(?<firs>[A-Za-z]{3,})\1\1(?<secon>[A-Za-z]{3,})\1/g;
    let valid = "";
    let pairs = 0;
    let pairarr = [];
    while ((valid = pattern.exec(me)) != null) {
      let fristo = valid.groups["firs"];
      let secondo = valid.groups["secon"];
      if (fristo != null && secondo != null){
        pairs++;
      }
      
      let k = secondo.split("");
      let s = k.reverse().join("");
      
      if (fristo == s){
          let m = `${fristo} <=> ${secondo}`;
          pairarr.push(m);
      }
    }
    if (pairs == 0) {
      console.log(`No word pairs found!`);
      console.log(`No mirror words!`);
    } else {
      console.log(`${pairs} word pairs found!`);
      if (pairarr.length > 0) {
        console.log(`The mirror words are:`)
        console.log(pairarr.join(", "));
      } else {
        console.log(`No mirror words!`);
      }
    }
  
  }