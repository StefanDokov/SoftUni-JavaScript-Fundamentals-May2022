function solve(m, n) {
    let g = Number(m);
    let k = Number(n);
    let sumo = 0;
    let typo = 0;
    let o = g - 1;
    let b = k - 1;
    for(let i = o;i >= 1;i--){
        sumo = g * i;
        g = sumo;
        
    }
    for(let f = b;f >= 1;f--){
        typo = k * f;
        k = typo;
        
    }
    console.log((sumo / k).toFixed(2));

}