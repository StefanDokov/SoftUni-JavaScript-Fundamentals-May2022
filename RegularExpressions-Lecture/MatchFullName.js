function bonus(names) {
    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/gm;
  
    let validNames = [];
    while((validName = pattern.exec(names)) != null) {
      validNames.push(validName[0]);
    }
    console.log(validNames.join(" "));
  }