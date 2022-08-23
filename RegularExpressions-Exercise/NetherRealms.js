function bonus(input) {
    let hum = /[, ]+/g;
    let go = input.split(hum);
    let heltreg = /[^0-9.\/+*-]/g;
    let demons = {};
    let dmgreg = /[+-]?\d+\.?\d*/g;
    let dmgdev = /\*|\//g;;
    for (let p of go) {
      
      let hp = 0;
      let dmmg = 0;
      let helt = p.match(heltreg);
      if (helt != null) {
        
        for (let g of helt) {
          hp += g.charCodeAt(0);
        }
        
      }
      let dmgeo = p.match(dmgreg);
      if (dmgeo != null) {
  
      for (let u of dmgeo) {
        dmmg += Number(u);
      }
    }
      
      let dmgdevide = p.match(dmgdev);
  
      if (dmgdevide != null) {
      
      
      for (let b of dmgdevide) {
        if (b == "*"){
          dmmg *= 2;
        } else {
          dmmg /= 2;
        }
      }
    }
      demons[p] = {};
      demons[p].health = hp;
      demons[p].dmg = dmmg;
  
    }
    let sorted = Object.entries(demons).sort((a,b)=> a[0].localeCompare(b[0]));
    for (const [name, value] of sorted) {
      console.log(`${name} - ${value.health} health, ${(value.dmg).toFixed(2)} damage`);
  }
  
  }