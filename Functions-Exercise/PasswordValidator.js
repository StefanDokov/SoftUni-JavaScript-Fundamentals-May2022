function solve(gsix) {
   
    let b = "";
    b += gsix;
    let leter = 0;
    let numo = 0;
    let supa = true;
    if (b.length < 6 || b.length > 10){
        console.log(`Password must be between 6 and 10 characters`);
    }
    
    for (let i = 0;i < b.length;i++){
        let s = b[i];
        let p = s.charCodeAt(0);
        if (p >= 48 && p <= 57){
            numo++;
        }
        else if ((p >= 65 && p <= 90) || (p >= 97 && p <= 122)){
            leter++;
        }
        else {
             console.log(`Password must consist only of letters and digits`);
             supa = false;
             break;
        }
        
    }
    
      if (numo < 2){
          console.log(`Password must have at least 2 digits`);
      }
      if (numo >= 2 && leter > 0 && b.length >= 6 && b.length <= 10 && supa){
          console.log(`Password is valid`);
      }
    

}