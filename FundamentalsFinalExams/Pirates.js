function bonus(input) {
    let index = 0;
    let contrys = {};
    let turns = input[index];
    index++;
    while (turns != "Sail"){
        let [city,popul,golde] = turns.split("||");
        if (!contrys.hasOwnProperty(city)){
          contrys[city] = {
            population: Number(popul),
            gold: Number(golde)
          }
        } else {
          contrys[city].population += Number(popul);
          contrys[city].gold += Number(golde);
        }
  
    turns = input[index];
    index++;
    }
    let g = 0;
    if (turns == "Sail"){
      g = index;
    }
    let oW = input[g];
    g++;
    while (oW != "End"){
      let [whatodo,grad,ppl,pari] = oW.split("=>");
      switch(whatodo){
        case "Plunder":
          contrys[grad].population -= Number(ppl);
          contrys[grad].gold -= Number(pari);
          if (contrys[grad].population <= 0 || contrys[grad].gold <= 0){
            console.log(`${grad} plundered! ${pari} gold stolen, ${ppl} citizens killed.`)
            console.log(`${grad} has been wiped off the map!`);
            delete contrys[grad];
          } else {
            console.log(`${grad} plundered! ${pari} gold stolen, ${ppl} citizens killed.`);
          }
          break;
          case "Prosper":
            if (Number(ppl) < 0){
              console.log(`Gold added cannot be a negative number!`);
              break;
            } else {
              contrys[grad].gold += Number(ppl);
              console.log(`${ppl} gold added to the city treasury. ${grad} now has ${contrys[grad].gold} gold.`);
            }
  
            break;
  
      }
  
      oW = input[g];
      g++;
    }
    if (Object.keys(contrys).length > 0){
    console.log(`Ahoy, Captain! There are ${Object.keys(contrys).length} wealthy settlements to go to:`);
    for (let b in contrys){
      console.log(`${b} -> Population: ${contrys[b].population} citizens, Gold: ${contrys[b].gold} kg`);
    }
  } else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  }
  }