function bonus(input) {
    let tekst = input.shift();
    let index = 0;
    let comnd = input[index];
    index++;
    while (comnd != "Reveal") {
      let me = comnd.split(":|:");
      let doO = me[0];
      let partOne = me[1];
      let parTwo = me[2];
      switch (doO) {
        case "InsertSpace":
          let s = tekst.substring(0, Number(partOne));
          let k = tekst.substring(Number(partOne));
          tekst = s + " " + k;
          console.log(tekst);
          break;
        case "ChangeAll":
          while (tekst.includes(partOne)){
          tekst = tekst.replace(partOne, parTwo);
          }
          console.log(tekst);
          break;
        case "Reverse":
          if (!tekst.includes(partOne)) {
            console.log(`error`);
            break;
          } else {
            let r = tekst.substring(0, tekst.indexOf(partOne));
            let h = tekst.substring(tekst.indexOf(partOne) + partOne.length);
            let si = partOne.split("");
            si = si.reverse();
            si = si.join("");
            tekst = r + h + si;
            console.log(tekst);
          }
          break;
      }
      
      comnd = input[index];
      index++;
    }
    if (comnd == "Reveal"){
      console.log(`You have a new text message: ${tekst}`);
    }
  
  
  }