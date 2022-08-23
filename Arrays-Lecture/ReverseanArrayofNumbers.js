function solve(n,inpuArr) {
    let arr = [];
    for(let i = 0; i < n; i++){
        let s = Number(inpuArr[i]);
        arr.push(s);
    }
    
     let output = "";
     for (let k = arr.length - 1; k >= 0; k--) {
         let m = Number(arr[k]);
         output += `${m} `;
     }
   console.log(output);
  }