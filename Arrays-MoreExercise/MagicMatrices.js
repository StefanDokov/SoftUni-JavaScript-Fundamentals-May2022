function solve(input) {
    let dk = 0;
    
    let you = 0;
    let sus = 0;
    
    for(let i = 0;i < input.length;i++){
      let ops = input[i]
      for (let k = 0;k < ops.length;k++){
      let g = ops[0];
      let a = ops[1];
      let b = ops[2];
      dk += g;
      you += a;
      sus += b;   
  }
  }
  if (dk == you && dk == sus){
    console.log(true);
    }
    else {
      console.log(false);
    }
  }