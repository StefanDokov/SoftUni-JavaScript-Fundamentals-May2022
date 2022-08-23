function solve(inputt) {
    let input = inputt.slice().map(Number);
    let students = input.pop();
    let sum = 0;
    let hs = 0;
    input.map((x) => sum += x);
    while (students > 0){
      students -= sum;
      hs++;
      if (hs % 4 == 0){
        hs++;
      }
    }
    console.log(`Time needed: ${hs}h.`);
 } 