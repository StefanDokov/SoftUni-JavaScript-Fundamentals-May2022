function solve(n) {
    let get = [];
    for (let i = 0;i < n.length;i++){
     let b = Number(n[i]);
     
     if (b < 0) {
          get.unshift(b);
     } else {
        get.push(b);
     }

}

    for (let el of get) {
        console.log(el);
    }
   
}