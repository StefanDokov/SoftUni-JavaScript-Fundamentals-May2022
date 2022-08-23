function solve(input) {
    let go = input.slice();
    let phones = go.shift().split(", ");
    let index = 0;
    let procedure = go[index];
    index++;


    while (procedure != "End"){
        let action = procedure.split(" - ");
        let moving = action[0];
        let model = action[1];
        switch(moving){
          case "Add":
                   if (!phones.includes(model)){
                     phones.push(model);
                   }
                   break;
              case "Remove":
                    if (phones.includes(model)){
                      phones.splice(phones.indexOf(model),1);
                    }   
                    break;
                    case "Bonus phone":
                          let newModel = model.split(":");
                          let oldMod = newModel[0];
                          let newMod = newModel[1];
                          if (phones.includes(oldMod)){
                            phones.splice(phones.indexOf(oldMod) + 1,0,newMod);
                          }  
                          break;
                        case "Last":
                          if (phones.includes(model)){
                              let down = phones.splice(phones.indexOf(model),1);
                              phones.push(down);
                              break;

                          }
                    
        }

    procedure = go[index];
    index++;

    }
    if (procedure == "End"){
      console.log(phones.join(", "));
    }
}