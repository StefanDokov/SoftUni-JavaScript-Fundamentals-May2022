function bonus(numbers) {
    let pattern = /\>>(?<ured>[A-Za-z]+)<<(?<price>\d{0,3}.\d{1,})!(?<quant>\d+)/gm;
    let validDate = "";
    let pari = 0;
    console.log(`Bought furniture:`);
    for (let i of numbers){
    while((validDate = pattern.exec(i)) != null) {
      let ured = validDate.groups["ured"];
      let price = validDate.groups["price"];
      let quant = validDate.groups["quant"];
      pari += price * quant;
      
      console.log(ured);
    }
  }
    console.log(`Total money spend: ${pari.toFixed(2)}`);
  }