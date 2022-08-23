function solve(n, h) {
    let stair = 0;
    let osnova = 0;
    let kamen = 0;
    let marb = 0;
    let vskam = 0;
    let vsmarb = 0;
    let vslapis = 0;
    let vsgold = 0;
    let k = n;
    
    let dada = true;
    while (k > 0) {
    stair++;
    let s = k - 2;
    osnova = k * k;
    kamen = s * s;
    marb = osnova - kamen;
    if ((k - 2) <= 0) {
      vsgold = k * k;
      dada = false;
    }
     if (stair % 5 !== 0 && dada == true) {
     vskam += kamen;
     vsmarb += marb;
     }
     if (stair % 5 == 0 && dada == true){
      vskam += kamen;
      vslapis += marb;
     }
     
     
     k = k - 2;
     
  }
  if (k <= 0) {
    let heights = Math.trunc(stair * h);
    let totalston = Math.ceil(vskam * h);
    let totalmarb = Math.ceil(vsmarb * h);
    let totallap = Math.ceil(vslapis * h);
    let totalgold = Math.ceil(vsgold * h);
    
    console.log(`Stone required: ${totalston}`);
    console.log(`Marble required: ${totalmarb}`);
    console.log(`Lapis Lazuli required: ${totallap}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${heights}`);
  }
  
  
  }