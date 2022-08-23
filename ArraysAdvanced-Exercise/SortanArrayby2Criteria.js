function solve(input) {
    let go = input.slice();
    let newOp = [];
   let goe = Number(input.length);
   while (goe > 0){
    let leng = go.map(x => x.length).map(Number);
    let mino = Math.min(...leng);
    let small = go.filter(word => word.length == mino);
    small.sort();
    for (let i = 0;i < small.length;i++){
      let pu = small[i];
    newOp.push(pu);
    }
    let big = go.filter(word => word.length != mino);
     go = big;
   goe--;
   }
   console.log(newOp.join("\n"));
   
   
   }