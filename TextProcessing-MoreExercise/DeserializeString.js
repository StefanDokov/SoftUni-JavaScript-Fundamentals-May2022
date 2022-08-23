function partyTime(a) {
    let me = [];
    let index = 0;
    let h = a[index];
    index++;
    while (h != "end") {
    let gg = h.split(":");
    let letter = gg[0];
    let b = gg[1].split("/").map(Number);
    for (let i of b) {
      me[i] = letter;
    }
  
    h = a[index];
    index++
    }
    if (h == "end") {
    
    console.log(me.join(""))
    }
  }