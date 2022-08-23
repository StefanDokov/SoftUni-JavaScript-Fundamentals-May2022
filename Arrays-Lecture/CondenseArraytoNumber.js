function solve(inpuArr) {
    
    if (inpuArr.length == 1) {
        let p = Number(inpuArr[0]);
        console.log(p);
        
    }
    
  while (inpuArr.length > 2) {
    let conden = [];
        for (let i = 0;i < inpuArr.length - 1;i++){
        let s = Number(inpuArr[i]);
        let k = Number(inpuArr[i + 1]);
        let d = s + k;
        conden.push(d);
        }
    inpuArr = conden;
    

   }
if (inpuArr.length == 2) {
    let m = Number(inpuArr[0]);
    let g = Number(inpuArr[1]);
    let dis = m + g;
    console.log(dis);
} 

}