function solve(inputt) {
    let go = inputt.slice();
    let houses = go.shift().split("@").map(Number);
    let index = 0;
    let jump = go[index].split(" ");
    index++;
    let g = 0;
    let ima = true;
    while (jump != "Love!"){
     
    let leng = Number(jump[1]);
    let top = g + leng;
    let pop = 0;
    
     if (top >= houses.length){
         top = 0;
     }
    
     
     if (houses[top] == 0) {
         console.log(`Place ${top} already had Valentine's day.`);
         
     }
     else {
     houses[top] -= 2;
     if (houses[top] <= 0){
         houses[top] = 0;
         console.log(`Place ${top} has Valentine's day.`)
         
     }
 }
     g = top;
 
    
    jump = go[index].split(" ");
    index++;
 
    }
    let djin = houses.filter(x => x != 0);
    if (jump == "Love!"){
      console.log(`Cupid's last position was ${g}.`);
      if (djin.length > 0){
      console.log(`Cupid has failed ${djin.length} places.`);
    }
    else {
     console.log(`Mission was successful.`);
    }
 }
 }