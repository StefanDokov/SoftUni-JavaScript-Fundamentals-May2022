function partyTime(a) {
    let start = 0;
    let full = [];
    let b = 0;
    let s = 0;
    
    for(let i = 0;i < a.length;i++) {
        let p = a[i];
        if (p == p.toUpperCase()) {
            if (s == 0) {
            start = i;
            s++;
            continue;
        } 
           b = i;
           let you = a.slice(start, b);
           full.push(you);
           start = b;
        
    }
    
}
for (let k = a.length - 1;k >= 0;k--) {
    let gg = a[k];
    if (gg == gg.toUpperCase()){
        full.push(a.slice(Math.abs(k)));
        console.log(full.join(", "));
        return;
    }
}

}