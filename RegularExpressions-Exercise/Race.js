function bonus(numbers) {
    let racers = numbers.shift().split(", ");
    let pattern = /[a-zA-Z]/g;
    let sumo = /[0-9]/g;
    let gigi = {};
    let index = 0;
    let code = numbers[index];
    index++;
    while (code != "end of race") {
    let ho = 0;
    let you = code.match(pattern);
    let gg = you.join("");
    let ok = code.match(sumo).map(Number).map(x => ho += x);
    if (racers.includes(gg)){
      if (!gigi.hasOwnProperty(gg)) {
    gigi[gg] = ho;
      } else {
        gigi[gg] += ho;
      }
    }
  
    code = numbers[index];
    index++;
    
    } 
    let sum = Object.entries(gigi).sort((a,b)=> b[1]-a[1]);
    
    console.log(`1st place: ${sum[0][0]}`);
    console.log(`2nd place: ${sum[1][0]}`);
    console.log(`3rd place: ${sum[2][0]}`);
      
    
    
  }