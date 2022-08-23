function bonus(numbers) {
  
    let pattern = /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<hrana>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
    let amont = /\|\d+\|/g;
    let price = /\d{1,}.\d{0,}\$/g;
    let gigi = {};
    let valid = "";
    let index = 0;
    let code = numbers[index];
    index++;
    let total = 0;
    while (code != "end of shift") {
      while((valid = pattern.exec(code)) != null) {
        let name = valid.groups["name"];
        gigi[name] = {};
        let hrana = valid.groups["hrana"];
        let count = valid.groups["count"];
        let price = valid.groups["price"];
        gigi[name][hrana] = count * price;
        total += count * price;
        console.log(`${name}: ${hrana} - ${gigi[name][hrana].toFixed(2)}`)
  
      }
    
    code = numbers[index];
    index++;
    
    } 
    
    console.log(`Total income: ${total.toFixed(2)}`);
  }