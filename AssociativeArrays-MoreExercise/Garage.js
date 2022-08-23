function partyTime(input) {
    let go = {};
   for (el of input) {
    let list = el.split(" - ");
    let gar = list[0];
    let left = list[1].split(",");
    if (!go.hasOwnProperty(gar)){
        go[gar] = [];
    } 
    if (go.hasOwnProperty(gar)) {
    let ho = {};
    for (el of left) {
        let [nam,val] = el.split(":");
        ho[nam] = val;
        
    }
    go[gar].push(ho);
   }
}
   for (let ele in go) {
    console.log(`Garage № ${ele}`);
      for (let i of go[ele]){
        let me = Object.keys(i);
        let to = `--- ${me[0]} -${i[me[0]]}`;
        for (let j = 1;j < me.length;j++){
            to += `,${me[j]} -${i[me[j]]}`;
        }
        console.log(to)
      }
   }
}