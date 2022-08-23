function solve(input) {
    let s = input.length - 1;
    let g = [];
    let you = Number(input[s]);
    for (let i = 0;i < s;i++){
      let r = input[i];
      g.push(r);
    }
    let p = g.length - 1;
    for (let l = 0;l < you;l++){
    let sus = g[p];
    g.unshift(sus);
    g.pop();
    }
    console.log(g.join(" "));
    
    }