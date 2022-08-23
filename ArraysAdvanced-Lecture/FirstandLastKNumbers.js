function solve(n) {
    let m = Number(n[0]);
    let numeros = n.slice(1);
    let g = numeros.length;
    let o = g - m;
    let star = numeros.slice(0,m);
    let last = numeros.slice(o,g);
    console.log(star.join(" "));
    console.log(last.join(" "));
    
    
      
    }