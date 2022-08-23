function solve(m, n) {
    between(m,n);
    

    function between(m,n){
        
    let ch = m.charCodeAt(0);
    let hc = n.charCodeAt(0);
    let j = [];
    if (ch < hc){
    for (let i = ch + 1;i < hc;i++){
           let s = String.fromCharCode(i);
           j.push(s);
           
    }
}  
    else {
        for (let i = hc + 1;i < ch;i++){
            let s = String.fromCharCode(i);
            j.push(s);
            
     }

    }
      
      console.log(j.join(" "));
    }
    
    

}