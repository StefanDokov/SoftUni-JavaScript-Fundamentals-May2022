function solve(inputt) {
    let go = [];
    for (let el of inputt) {
       let sum = JSON.parse(el);
       go.push(sum);
  
    }
    let me = [];
    let oro = [];
    go.forEach(ele => {
      let s = "";
      s += Object.keys(ele);
      let m = "";
      m += Object.values(ele);
      if (oro.includes(s)){
        let o = `${s} / ${m}`;
        me.splice(oro.indexOf(s),1,o);
      } else {
      let g = `${s} / ${m}`;
      me.push(g);
      oro.push(`${s}`);
      }
    });
    let sorto = me.sort();
    sorto.forEach(elm => {
      let [h, k] = elm.split(" / ");
      console.log(`Term: ${h} => Definition: ${k}`);
    })
    
  
  
  }