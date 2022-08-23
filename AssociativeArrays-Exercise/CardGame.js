function solve(obje) {
    let game = {};
    
    for (let h of obje) {
        let draw = h.split(": ");
        let name = draw[0];
        let cards = draw[1].split(", ");
        
        if (game.hasOwnProperty(name)) {
            for (let el of cards) {
                if (!game[name].includes(el)){
                   game[name].push(el);
                }
            }
        } else {
            
            game[name] = [];
            for (let r of cards) {
                if(!game[name].includes(r)){
                    game[name].push(r);
                }
            }

        }
    }
     
    for (let eli in game) {
        let res = game[eli];
        for (let i of res) {
            let vid = i.slice(-1);
            let karta = i.slice(0,-1);
            let k = 0;
            let s = 0;
                switch(vid){
                        case "S": if (karta == "J"){
                            k = 11;
                        } else if (karta == "Q") {
                            k = 12;
                        } else if (karta == "K") {
                            k = 13;
                        }else if (karta == "A") {
                            k = 14;
                        } else {
                            k = Number(karta);
                        } 
                          s = k * 4;
                          
                          res.splice(res.indexOf(i),1,s);
                          break;
                          case "H": if (karta == "J"){
                            k = 11;
                        } else if (karta == "Q") {
                            k = 12;
                        } else if (karta == "K") {
                            k = 13;
                        }else if (karta == "A") {
                            k = 14;
                        } else {
                            k = Number(karta);
                        } 
                          s = k * 3;
                          res.splice(res.indexOf(i),1,s);
                          break;
                          case "D": if (karta == "J"){
                            k = 11;
                        } else if (karta == "Q") {
                            k = 12;
                        } else if (karta == "K") {
                            k = 13;
                        }else if (karta == "A") {
                            k = 14;
                        } else {
                            k = Number(karta);
                        } 
                          s = k * 2;
                          res.splice(res.indexOf(i),1,s);
                          break;
                          case "C": if (karta == "J"){
                            k = 11;
                        } else if (karta == "Q") {
                            k = 12;
                        } else if (karta == "K") {
                            k = 13;
                        }else if (karta == "A") {
                            k = 14;
                        } else {
                            k = Number(karta);
                        } 
                          s = k * 1;
                          res.splice(res.indexOf(i),1,s);
                          break;
                        
                    }
        } 
    }
    for (let op in game) {
        let sum = 0;
        let toy = game[op];
        let ko = toy.map(x => sum += x);
        game[op] = sum;
    }

    for (let y in game) {
        console.log(`${y}: ${game[y]}`);
    }

}