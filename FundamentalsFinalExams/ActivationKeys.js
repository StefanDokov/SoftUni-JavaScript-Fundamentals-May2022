function bonus(input) {
    let sentance = input.shift();
    let index = 0;
    let turning = input[index];
    index++;
    while (turning != "Generate"){
      let g = turning.split(">>>");
      let star = g[0];
      let firs = g[1];
      let seco = g[2];
      let thir = g[3];
      switch(star){
        case "Contains":
          if (sentance.includes(firs)){
            console.log(`${sentance} contains ${firs}`);
          } else {
            console.log(`Substring not found!`);
          }
          break;
          case "Flip":
            let p = sentance.substring(Number(seco),Number(thir));
            if (firs == "Upper"){
              sentance = sentance.replace(p,p.toUpperCase());
  
            } else if (firs == "Lower"){
              sentance = sentance.replace(p,p.toLowerCase());
            }
            console.log(sentance);
            break;
            case "Slice":
              let k = sentance.substring(Number(firs),Number(seco));
              sentance = sentance.replace(k,"");
              console.log(sentance);
              break;
  
      }
  
      turning = input[index];
      index++;
  
    }
    console.log(`Your activation key is: ${sentance}`);
  }