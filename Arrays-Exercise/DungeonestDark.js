function solve(input) {
    let huh = "";
    huh += input[0];
    let supa = huh.replace(/[^a-zA-Z0-9]/g,'-');
    supa += "-";
      let index = 0;
      let ne = supa[index];
      index++;
      let s = "";
      let m = 0;
      let health = 100;
      let gold = 0;
      let d = 0;
      let o =  "";
      let final = true;
      for(let i = 0;i < supa.length;i++){
        d++;
        while (ne != "-"){
        
        s += ne;
        ne = supa[index]
        index++;
        }
      
      if (i % 2 != 0){
      m = Number(s);
        
      }
      else {
        o = s;
      }
      if (d % 2 == 0){
      if (o != "potion" && o != "chest"){
        health -= m;
        if (health <= 0) {
           console.log(`You died! Killed by ${o}.`);
           console.log(`Best room: ${d / 2}`);
           final = false;
           break;
        }
        else {
          console.log(`You slayed ${o}.`);
        }
      }
      if (o == "potion"){
        if (100 - health < m){
          console.log(`You healed for ${100 - health} hp.`);
          health = 100;
          console.log(`Current health: ${health} hp.`);
        }
        else {
        health += m;
        console.log(`You healed for ${m} hp.`);
        console.log(`Current health: ${health} hp.`);
        }
      }
      if (o == "chest"){
        gold += m;
        console.log(`You found ${m} coins.`);
      }
    }
      
      if (ne == "-"){
        if (index > supa.length - 1){
          break;
        }
        ne = supa[index];
        index++;
        s = "";
        
      }
      
    }
    if (final == true){
    console.log(`You've made it!`);
    console.log(`Coins: ${gold}`);
    console.log(`Health: ${health}`);
    }
  }