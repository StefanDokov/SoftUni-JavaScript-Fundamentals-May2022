function solve(input,impud) {
    let thirdo = [];
    for (let i = 0;i < input.length;i++) {
        if (i % 2 == 0) {
        let s = Number(input[i]);
        let k = Number(impud[i]);
        let o = s + k;
        thirdo.push(o);
        }
        else {
            let s = input[i];
            let k = impud[i];
            let o = s + k;
            thirdo.push(o);
        } 
 
    
 }
 console.log(thirdo.join(" - "));
 }