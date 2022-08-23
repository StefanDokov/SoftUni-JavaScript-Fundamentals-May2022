function partyTime(a) {
   
    let go = a.substring(0, a.length / 2);
    let mu = a.substring(a.length / 2, a.length);
    
    rever(go);
    rever(mu);
    function rever(stri) {
        let s = "";
       for (let i = stri.length - 1;i >= 0;i--) {
          s += stri[i];
       }
       return console.log(s);
    }
  
}