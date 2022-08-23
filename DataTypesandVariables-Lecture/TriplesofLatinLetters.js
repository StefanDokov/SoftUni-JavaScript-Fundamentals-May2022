function solve(str) {
  
  
    for (let i = 0; i < str;i++){
      let letter = String.fromCharCode(97 + i);
      for (let k = 0; k < str;k++){
        let letterz = String.fromCharCode(97 + k);
        for (let m = 0; m < str;m++){
          let lettero = String.fromCharCode(97 + m);
          console.log(`${letter}${letterz}${lettero}`);
        }
      }
    }
    
  }