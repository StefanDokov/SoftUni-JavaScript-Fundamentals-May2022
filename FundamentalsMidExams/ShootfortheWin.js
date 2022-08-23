function solve(inputt) {
    let go = inputt.slice();
    let targets = go.shift().split(" ").map(Number);
    
    let index = 0;
    let shot = go[index];
    index++;
  let gun = 0;
    while (shot != "End"){
      let boom = Number(shot);
      if (boom >= 0 && boom < targets.length){
        let s = Number(targets[boom]);
        if(s != -1){
      targets = targets.map((x) => {
          if (x != -1 && x > s){
            x -= s;
          }
          else if (x != -1 && x <= s){
             x += s;
          }
          return x;
      });
      targets[boom] = -1;
      gun++;
      }
    }

        shot = go[index];
        index++;

    }
    if (shot == "End"){
        return console.log(`Shot targets: ${gun} -> ${targets.join(" ")}`);
    }
 
 }