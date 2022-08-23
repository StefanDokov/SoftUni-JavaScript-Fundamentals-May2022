function partyTime(a) {
    let go = a[0];
    let me = {};
    for(let i = 0;i < go.length;i++){
      let u = go[i];
      if (!me.hasOwnProperty(u)){
          me[u] = [];
      }
       me[u].push(i);
        
    }
    for (let y in me) {
       console.log(`${y}:${me[y].join("/")}`);
    }
     
  }