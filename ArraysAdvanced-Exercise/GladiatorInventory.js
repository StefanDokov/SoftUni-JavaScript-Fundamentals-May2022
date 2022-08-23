function solve(input) {
    let items = input.slice();
    let inventory = items.shift().split(" ");
    for (let i = 0;i < items.length;i++){
      let operation = items[i].split(" ");
      switch(operation[0]){
                case "Buy":
                  if (!inventory.includes(operation[1])){
                    inventory.push(operation[1]);
                  }
                  break;
                  case "Trash":
                    if (inventory.includes(operation[1])){
                      inventory.splice((inventory.indexOf(operation[1])),1);
                    }
                    break;
                    case "Repair":
                      if (inventory.includes(operation[1])){
                        inventory.splice((inventory.indexOf(operation[1])),1);
                        inventory.push(operation[1]);
                      }
                      break;
                      case "Upgrade":
                        let typer = operation[1].split("-");
                        let newItem = `${typer[0]}:${typer[1]}`;
                        if (inventory.includes(typer[0])){
                          inventory.splice(inventory.indexOf(typer[0]) + 1,0,newItem);
                        }
                        break;
      }
    }
     console.log(inventory.join(" "));
  }