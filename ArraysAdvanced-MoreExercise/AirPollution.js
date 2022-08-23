function solve(obje,arro) {
    let go = obje.slice();
    let yes = [];
    go.forEach(el => 
        yes.push(el.split(" ").map(Number)));
   
  for (let i = 0;i < arro.length;i++){
    let obji = arro[i].split(" ");
    let feel = obji[0];
    let ranger = Number(obji[1]);
    switch(feel) {
        case "breeze":
               for(let k = 0;k < yes[ranger].length;k++){
                  yes[ranger][k] -= 15;
                  if (yes[ranger][k] < 0) {
                    yes[ranger][k] = 0;
                  }
               }
               break;
            case "gale":
                for(let s = 0;s < yes.length;s++){
                    yes[s][ranger] -= 20;
                    if (yes[s][ranger] < 0) {
                        yes[s][ranger] = 0;
                      }
                }   
                break;
              case "smog":
                for(let p = 0;p < yes.length;p++){
                    for(let m = 0;m < yes[p].length;m++){
                        yes[p][m] += ranger;
                    }
                }
                break;

    }

  }
  let pic = [];
  for (let o = 0;o < yes.length;o++) {
    for (let l = 0;l < yes[o].length;l++){
        if (yes[o][l] >= 50) {
            pic.push(`[${o}-${l}]`);
        }
    }
  }
  if (pic.length > 0) {
    console.log(`Polluted areas: ${pic.join(", ")}`);
  }
  else {
    console.log(`No polluted areas`);
  }
   
}