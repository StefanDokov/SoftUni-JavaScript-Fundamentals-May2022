function solve(input) {
    let go = input.split(" ").map(Number);
    let sum = 0;
    go.map(x => sum += x);
    let aver = sum / go.length;
    let biger = go.filter(x => x > aver);
    if (biger.length == 0){
     console.log(`No`);
    }
    let sorted = biger.sort((a,b) =>  b - a);
    let gsix = sorted.splice(0,5);
    console.log(gsix.join(" "));
 }