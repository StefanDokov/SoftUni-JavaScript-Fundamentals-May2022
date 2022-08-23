function solve(inputt) {
    let input = inputt.slice();
    let piratship = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let healthcap = Number(input.shift());
    let index = 0;
    let action = input[index].split(" ");
    index++;
    
    while (action != "Retire"){
         switch(action[0]){
            case "Fire": if (Number(action[1]) < 0 || Number(action[1]) >= warship.length){
                break;
            }
            let hp = Number(warship[action[1]]);
            let dmg = Number(action[2]);
            let hpleft = hp - dmg;
            if (hpleft > 0){
                warship.splice(Number(action[1]),1,hpleft);
            }
            else {
                return console.log(`You won! The enemy ship has sunken.`);
            }
            break;
            case "Defend":
                if ( Number(action[1]) < 0 || Number(action[1]) >= piratship.length || Number(action[2]) >= piratship.length || Number(action[1]) > Number(action[2])) {
                    break;
                }
                for (let i = Number(action[1]);i <= Number(action[2]);i++){
                    piratship[i] -= Number(action[3]);
                    if (piratship[i] <= 0) {
                        return console.log(`You lost! The pirate ship has sunken.`);
                    }

                }
                
                 break;
                 case "Repair":
                          if (Number(action[1]) < 0 || Number(action[1]) >= piratship.length){
                            break;
                          }
                          let hphp = Number(piratship[action[1]]);
                          hphp += Number(action[2]);
                          if (hphp >= healthcap){
                            hphp = healthcap;
                          }
                          piratship.splice(Number(action[1]),1,hphp);
                          break;
                          case "Status":
                            let op = 0;
                            let crit = Math.round(healthcap * 0.2);
                            let g = piratship.map(y => {
                                if (y < crit){
                                    op++;
                                }
                                
                            });
                            console.log(`${op} sections need repair.`);
                            break;
 
         }
        
        action = input[index].split(" ");
        index++;
    }
    if (action == "Retire"){
        let sumo = 0;
        let me = piratship.map(h => sumo += h);
        let sumi = 0;
        let you = warship.map(k => sumi += k);
        console.log(`Pirate ship status: ${sumo}`);
        console.log(`Warship status: ${sumi}`);
    }
   
 }