function bonus(input) {
    let heroes = {};
    let turns = Number(input.shift());
    for (let i = 0;i < turns;i++){
       let g = input.shift().split(" ");
       let namo = g[0];
       let kruv = Number(g[1]);
       let mana = Number(g[2]);
       heroes[namo] = {
        hp:kruv,
        mp:mana
       };
  
    }
    let index = 0;
    let attk = input[index];
    index++;
    while (attk != "End"){
      let p = attk.split(" - ");
      let vidatk = p[0];
      let whois = p[1];
      let value = Number(p[2]);
      let skakwo = p[3];
      switch(vidatk){
        case "CastSpell":
          if(heroes[whois].mp >= value){
            heroes[whois].mp -= value;
            console.log(`${whois} has successfully cast ${skakwo} and now has ${heroes[whois].mp} MP!`);
          } else {
            console.log(`${whois} does not have enough MP to cast ${skakwo}!`);
          }
          break;
          case "TakeDamage":
            if (heroes[whois].hp - value > 0) {
              heroes[whois].hp -= value;
              console.log(`${whois} was hit for ${value} HP by ${skakwo} and now has ${heroes[whois].hp} HP left!`);
            } else {
              console.log(`${whois} has been killed by ${skakwo}!`);
              delete heroes[whois];
            }
            break;
            case "Recharge":
              if (200 - heroes[whois].mp < value) {
                value = 200 - heroes[whois].mp;
              }
              heroes[whois].mp += value;
              console.log(`${whois} recharged for ${value} MP!`);
              break;
              case "Heal":
                if (100 - heroes[whois].hp < value) {
                  value = 100 - heroes[whois].hp;
                }
                heroes[whois].hp += value;
                console.log(`${whois} healed for ${value} HP!`);
                break;
  
  
      }
  
      attk = input[index];
      index++;
    }
    for (let b in heroes){
      console.log(b);
      console.log(` HP: ${heroes[b].hp}`);
      console.log(` MP: ${heroes[b].mp}`);
    }
  
  }