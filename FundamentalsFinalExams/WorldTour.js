function bonus(input) {
    let me = input.shift();
    let index = 0;
    let turns = input[index]
    index++;
  
    while (turns != "Travel") {
      if (turns.includes("Add")) {
        let g = turns.replace("Add Stop:", "");
        let b = g.split(":");
        let ind = Number(b[0]); 
        let text = b[1];
        if (ind >= 0 && ind < me.length) {
          let si = me.substring(0, ind);
          let is = me.substring(ind);
          me = si + text + is;
        }
      } else if (turns.includes("Remove")) {
        let p = turns.replace("Remove Stop:", "");
        let r = p.split(":");
        let start = Number(r[0]);
        let end = Number(r[1]);
        if (start >= 0 && end < me.length && start <= end) {
          let strone = me.substring(0, start);
          let strtwo = me.substring(end + 1);
          me = strone + strtwo;
        }
      } else if (turns.includes("Switch")) {
        let t = turns.replace("Switch:", "");
        let [smqna, sus] = t.split(":");
        if (me.includes(smqna)) {
            me = me.replace(smqna, sus);
           
        }
        
      }
      console.log(me);
      turns = input[index]
      index++;
    }
    if (turns == "Travel") {
      console.log(`Ready for world tour! Planned stops: ${me}`);
    }
  
  }