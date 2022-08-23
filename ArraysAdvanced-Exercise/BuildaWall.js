function solve(input) {
    let build = input.slice().map(Number);
    let put = [];
    let a = 0;
    let mino = Math.min(...build);
    let mina = 30 - mino;
    while (mina > 0){
     build = build.map((x) => {if (x < 30) {
      x++;
      a++;
      return x;
   }});
   let sum = a * 195;
   a = 0;
   put.push(sum);
   mina--;
 }
 let vs = 0;
 let go = put.map(o => vs += o);
 let pes = go.pop();
 let vischko = pes * 1900;
    console.log(put.join(", "));
    console.log(`${vischko} pesos`);
  
 }