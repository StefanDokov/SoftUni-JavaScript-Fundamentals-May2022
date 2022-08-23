function solve(input) {
    let sum = 0;
    let sumTwo = 0;
    let sumon = [];
    for (let i = 0;i < input.length;i++){
        let s = Number(input[i]);
        sum += s;
        
        if (s % 2 == 0) {
            s += i;
            sumon.push(s);
            sumTwo += s;
        }
        else {
            s -= i;
            sumon.push(s);
            sumTwo += s;
        }
    }
    console.log(sumon);
    
    console.log(sum);
    console.log(sumTwo);
}