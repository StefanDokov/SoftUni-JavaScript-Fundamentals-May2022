function solve(inputt) {
    let muonline = inputt.split("|");
    let health = 100;
    let coins = 0;
    for (let i = 0;i < muonline.length;i++){
         let room = muonline[i].split(" ");
         let enemy = room[0];
         let kruv = Number(room[1]);
         switch(enemy){
              case "potion":
                    health += kruv;
                    if (health > 100){
                        let g = health - 100;
                        kruv -= g;
                        health = 100;
                    }
                    console.log(`You healed for ${kruv} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    break;
                    case "chest":
                        coins += kruv;
                        console.log(`You found ${kruv} bitcoins.`);
                        break;
                        default:
                            health -= kruv;
                            if (health <= 0){
                                console.log(`You died! Killed by ${enemy}.`);
                                console.log(`Best room: ${i + 1}`);
                                return;
                            }
                            else {
                                console.log(`You slayed ${enemy}.`);
                            }
                            break;

         }
        }
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);

    }