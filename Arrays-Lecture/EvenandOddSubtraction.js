function solve(inpuArr) {
    let g = 0;
    let t = 0;
  for (let i = 0; i < inpuArr.length; i++) {
      let s = Number(inpuArr[i]);
      if (s % 2 == 0) {
        g += s;
      }
      else {
          t += s;
      }
  }
   
  console.log(g - t);
}