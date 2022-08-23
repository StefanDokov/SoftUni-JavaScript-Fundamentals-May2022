function bonus(input) {
    let mesage = input.shift();
    let index = 0;
    let form = input[index];
    index++;
  
    while (form != "Decode") {
      let parts = form.split("|");
      let whattodo = parts.shift();
      let indexone = parts[0];
      let indextwo = parts[1];
      switch (whattodo) {
        case "ChangeAll":
          mesage = mesage.split("");
          for (let i = 0; i < mesage.length; i++) {
            if (mesage[i] == indexone) {
              mesage[i] = indextwo;
            }
          }
          mesage = mesage.join("");
          break;
        case "Insert":
          mesage = mesage.split("");
          mesage.splice(Number(indexone), 0, indextwo);
          mesage = mesage.join("");
          break;
        case "Move":
          let g = mesage.substring(0, Number(indexone));
          let topg = mesage.substring(Number(indexone));
          mesage = topg + g;
          break;
  
      }
  
      form = input[index];
      index++;
    }
    if (form == "Decode") {
      return console.log(`The decrypted message is: ${mesage}`);
    }
  }