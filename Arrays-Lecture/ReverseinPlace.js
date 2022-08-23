function solve(inpuArr) {
  
    let output = "";
    for (let k = inpuArr.length - 1; k >= 0; k--) {
        let m = inpuArr[k];
        output += `${m} `;
    }
  console.log(output);
 }