function bonus(input) {
    let patern = /(:{2}|\*{2})(?<text>[A-Z][a-z]{2,})\1/g;
    let sentance = input[0];
    let tresh = /\d/g;
    let treshing = sentance.match(tresh);
    let line = 0;
    if (treshing.length == 1){
      line = 1
    } else {
    line = treshing.reduce((a,b) => a * b);
    }
    let emojis = sentance.match(patern);
    let t = 0;
    let coolemojis = [];
    if (emojis != null){
      t = emojis.length;
    for (let g of emojis){
    let cool = g.substring(2, g.length - 2);
    let op = 0;
    for (let s = 0;s < cool.length;s++){
      op += cool.charCodeAt(s);
    }
    if (op > line) {
      coolemojis.push(g);
    }
    }
  }
    console.log(`Cool threshold: ${line}`);
    console.log(`${t} emojis found in the text. The cool ones are:\n${coolemojis.join("\n")}`);
    
  }