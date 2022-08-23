function solve(inputt) {
    let go = inputt.slice();
    let energa = Number(go.shift());
    let index = 0;
    let reach = go[index];
    index++;
    let fights = 0;
    while (reach != "End of battle"){
     
     let hit = Number(reach);
     
     
     if (energa < hit || energa == 0){
         return console.log(`Not enough energy! Game ends with ${fights} won battles and ${energa} energy`);
     }else {
        fights++;
     }
     energa -= hit;
     if (fights % 3 == 0){
        energa += fights;
    }
     reach = go[index];
    index++;
    }
    if (reach == "End of battle"){
      return console.log(`Won battles: ${fights}. Energy left: ${energa}`);
 
    }
     
 
 } 