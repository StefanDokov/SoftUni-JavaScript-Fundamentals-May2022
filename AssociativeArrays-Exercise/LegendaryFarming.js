function solve(input) {
    let go = {}
    go.motes = 0;
    go.fragments = 0;
    go.shards = 0;
    let isTop = false;
    let trash = {};
    
    let allmats = input.split(" ");
    for (let i = 0;i < allmats.length;i += 2) {
      let quantity = Number(allmats[i]);
      let kind = allmats[i + 1].toLowerCase();
      
      if (!go.hasOwnProperty(kind)){
        if (!trash.hasOwnProperty(kind)){
        trash[kind] = quantity;
        } else {
          trash[kind] += quantity;
        }
  
      } else {
        go[kind] += quantity;
        if ((go[kind] >= 250) && (kind == "motes" || kind == "fragments" || kind == "shards")) {
          go.top = {[kind]: go[kind]};
          go[kind] -= 250;
          isTop = true;
          break;
        }
      }
  
    }
    if (isTop) {
       let winer = Object.keys(go.top);
       switch (winer[0]) {
           case "shards": console.log("Shadowmourne obtained!");
           break;
             case "fragments": console.log("Valanyr obtained!");
             break;
                case "motes": console.log(`Dragonwrath obtained!`);
                break;
       }
       delete go.top;
    }
    let me = Object.entries(go).sort ((a,b)=> b[1] - a[1] || a[0].localeCompare(b[0]));
    for (el of me) {
        console.log(`${el[0]}: ${el[1]}`);
    }
    let to = Object.keys(trash).sort();
    for (ele of to) {
      console.log (`${ele}: ${trash[ele]}`);
    }
  
  
  }