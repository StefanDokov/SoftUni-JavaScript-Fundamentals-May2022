function solve(inpuArr) {
    let g = 0;
  for (let i = 0; i < inpuArr.length; i++) {
      let s = Number(inpuArr[i]);
      if (s % 2 == 0) {
        g += s;
      }
  }
   
  console.log(g);
}