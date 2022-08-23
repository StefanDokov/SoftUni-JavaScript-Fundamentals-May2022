function solve(input,doing) {
    let go = doing.slice().map(Number);
    let endo = Number(go[0]);
    let delato = Number(go[1]);
    let sercho = Number(go[2]);
    let sup = input.slice().map(Number);
    let yeso = sup.splice(0,endo);
    let nomo = yeso.splice(0,delato);
    let g = yeso.filter(x => x == sercho);
    let times = g.length;
    console.log(`Number ${sercho} occurs ${times} times.`);
  }