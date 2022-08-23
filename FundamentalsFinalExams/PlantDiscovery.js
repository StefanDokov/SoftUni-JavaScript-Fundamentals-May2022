function bonus(input) {
    let rotation = Number(input.shift());
    let cvetq = {};
    while (rotation > 0) {
      let g = input.shift().split("<->");
      let ime = g[0];
      let rare = Number(g[1]);
      cvetq[ime] = {
        rare: rare,
        rating: 0
      }
  
      rotation--;
    }
    let index = 0;
    let turn = input[index];
    index++;
    while (turn != "Exhibition") {
      let me = turn.split(": ");
      let doO = me[0];
      let kakwo = "";
      let kolko = 0;
      if (doO == "Reset") {
        kakwo = me[1];
      } else {
        let whati = me[1].split(" - ");
        kakwo = whati[0];
        kolko = Number(whati[1]);
      }
      switch (doO) {
        case "Rate":
          if (!cvetq.hasOwnProperty(kakwo)) {
            console.log("error");
            break;
          } else {
            if (cvetq[kakwo].rating == 0) {
              cvetq[kakwo].rating = kolko;
            } else {
              cvetq[kakwo].rating = (cvetq[kakwo].rating + kolko) / 2;
            }
          }
          break;
        case "Update":
          if (!cvetq.hasOwnProperty(kakwo)) {
            console.log("error");
            break;
          } else {
            cvetq[kakwo].rare = kolko;
          }
          break;
        case "Reset": if (!cvetq.hasOwnProperty(kakwo)) {
          console.log("error");
          break;
        } else {
          cvetq[kakwo].rating = 0;
        }
          break;
  
      }
      turn = input[index];
      index++;
  
    }
    if (turn == "Exhibition") {
      console.log(`Plants for the exhibition:`);
      for (let b in cvetq) {
        console.log(`- ${b}; Rarity: ${cvetq[b].rare}; Rating: ${(cvetq[b].rating).toFixed(2)}`);
      }
    }
  
  }