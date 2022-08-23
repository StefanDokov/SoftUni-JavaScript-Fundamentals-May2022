function bonus(numbers) {
    let size = Number(numbers.shift());
    let counting = /[star]/gi;
    let pattern = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<popul>\d+)[^@:!\->]*\!(?<attk>[A|D])![^@:!\->]*\->(?<solder>\d+)/g;
    let valid = "";
    let planets = {};
    planets.attaked = {};
    planets.destr = {};
    planets.attaked.num = 0;
    planets.destr.num = 0;
    for (let i = 0; i < size; i++) {
      let fixminus = numbers[i].match(counting);
      if (fixminus == null){
        fixminus = []
      }
      let message = "";
      for (let o = 0; o < numbers[i].length; o++) {
        message += String.fromCharCode(numbers[i].charCodeAt(o) - fixminus.length);
      }
      while ((valid = pattern.exec(message)) != null) {
        let name = valid.groups["name"];
        let popul = valid.groups["popul"];
        let attk = valid.groups["attk"];
        let solder = valid.groups["solder"];
        switch (attk) {
          case "A": planets.attaked.num += 1;
            planets.attaked[name] = popul;
            break;
          case "D":
            planets.destr.num += 1;
            planets.destr[name] = popul;
            break;
        }
      }
  
    }
    console.log(`Attacked planets: ${planets.attaked.num}`);
    if (planets.attaked.num > 0){
    delete planets.attaked.num;
    let sorted = Object.keys(planets.attaked).sort((a,b) => a.localeCompare(b));
    sorted.forEach(el => 
      console.log(`-> ${el}`));
    }
    console.log(`Destroyed planets: ${planets.destr.num}`);
    if (planets.destr.num > 0) {
    delete planets.destr.num;
    let morted = Object.keys(planets.destr).sort((l,m) => l.localeCompare(m));
    morted.forEach(eli => 
      console.log(`-> ${eli}`));
    }
  }