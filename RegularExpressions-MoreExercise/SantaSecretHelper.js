function bonus(input) {
    let key = Number(input.shift());
    let pattern = /@([A-Za-z]+)[^-@!\:>]*!([G])!/gm;
    for (const word of input) {
      if (word === "end") {
        break;
      }
      let result = "";
      for (const letter of word) {
        result += String.fromCharCode(letter.charCodeAt() - key);
      }
      if (Array.from(result.matchAll(pattern)).length > 0) {
        let behavior = Array.from(result.matchAll(pattern))[0][2];
        let name = Array.from(result.matchAll(pattern))[0][1];
        console.log(name);
      }
    }
  }