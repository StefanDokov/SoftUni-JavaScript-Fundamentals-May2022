function solve(input) {
    let loot = input[0].split("|");
    let index = 1;
    let items = input[index];
    index++;
 
    while (items != "Yohoho!"){
      let doing = items.split(" ");
      switch(doing[0]){
         case "Loot":
                    for (let i = 1;i < doing.length;i++){
                     let found = doing[i];
                     if (!loot.includes(found)){
                         loot.unshift(found);
                     }
                    }
                    break;
                 case "Drop":
                     let amount = Number(doing[1]);
                     if (amount < 0 || amount >= loot.length){
                         break;
                     }
                     else {
                     let miss = loot.splice(amount,1);
                     loot.push(miss[0]);
                     }
                     break;
                     case "Steal":
                         let stolen = Number(doing[1]);
                         let gp = 0;
                         if (stolen > loot.length){
                             gp = 0;
                         }
                         else {
                             gp = loot.length - stolen;
                         }
                         let removen = loot.splice(gp);
                         console.log(removen.join(", "));
                         break;
      }
    
    items = input[index];
    index++;
    }
    if (items == "Yohoho!"){
     let all = loot.map(x => x.length);
     let sum = 0;
     all.map(x => sum += x);
     let g = loot.length;
     let supreme = sum / g;
     if (g == 0){
         console.log(`Failed treasure hunt.`);
     }
     else {
         console.log(`Average treasure gain: ${supreme.toFixed(2)} pirate credits.`)
     }
    }
 }