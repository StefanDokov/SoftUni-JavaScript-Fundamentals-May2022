function solve(inputt) {
    let invent = inputt.slice();
    let itemi = invent.shift().split(", ");
    let index = 0;
    let dejstvie = invent[index].split(" - ");
    index++;
    while (dejstvie != "Craft!"){
      let deistvaj = dejstvie[0];
      let itema = dejstvie[1]; 
      switch(deistvaj){
           case "Collect":
                   if (!itemi.includes(itema)){
                     itemi.push(itema);
                   }
                   break;
                   case "Drop":
                    if (itemi.includes(itema)){
                        itemi.splice(itemi.indexOf(itema),1);
                    } 
                    break;
                    case "Combine Items":
                        let craftmat = itema.split(":");
                        let oldItem = craftmat[0];
                        let newItem = craftmat[1];
                        if (itemi.includes(oldItem)){
                            itemi.splice(itemi.indexOf(oldItem)+1,0,newItem);
                        }
                        break;
                        case "Renew":
                            if (itemi.includes(itema)){
                                let move = itemi.splice(itemi.indexOf(itema),1);
                                itemi.push(move);
                            }
                            break;

      }

      dejstvie = invent[index].split(" - ");
      index++;

    }
    if (dejstvie == "Craft!"){
        return console.log(itemi.join(", "));
    }



}