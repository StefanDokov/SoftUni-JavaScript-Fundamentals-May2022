function solve(input) {
    input.sort();
 for (let i = 0;i < input.length;i++){
    let g = i + 1;
    let s = input[i];
    console.log(`${g}.${s}`);
 }
}