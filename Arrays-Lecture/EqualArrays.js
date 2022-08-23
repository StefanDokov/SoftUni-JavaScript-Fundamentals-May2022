function solve(inpuArr,impuArr) {
    let g = 0;
    let t = true;
  for (let i = 0; i < inpuArr.length; i++) {
      let s = Number(inpuArr[i]);
      let k = Number(impuArr[i]);
      if (s == k) {
          g += s;
      }
      else {
          console.log(`Arrays are not identical. Found difference at ${i} index`);
          t = false;
          break;
      }
  }
   if (t == true) {
  console.log(`Arrays are identical. Sum: ${g}`);
}
}