function bonus(input) {
    let patern = /([=|\/])(?<town>[A-Z][A-Za-z]{2,})\1/g;
    let desti = [];
    let variations = "";
    let pointi = 0;
  
    while ((variations = patern.exec(input)) != null) {
      let g = variations.groups["town"];
      desti.push(g);
      pointi += g.length;
    }
    console.log(`Destinations: ${desti.join(", ")}`);
    console.log(`Travel Points: ${pointi}`);
  
  }