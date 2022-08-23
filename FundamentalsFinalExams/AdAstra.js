function bonus(input) {
    let regex =/(\#|\|)(?<items>[A-Z][a-z]+|[A-Z]+[a-z]|[a-z+ [A-Z]+[a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let vidove ="";
    let calor = 0;
    let foods = [];
    while ((vidove = regex.exec(input[0])) != null) {
      let name = vidove.groups["items"];
      let date = vidove.groups["date"];
      let cals = vidove.groups["calories"];
      let obj = {
        nameO: name,
        datExp: date,
        cals: cals
      }
      foods.push(obj);
      calor += Number(cals);
    }
    let needs = Math.trunc(calor / 2000);
    console.log(`You have food to last you for: ${needs} days!`);
    for (let b of foods) {
      console.log(`Item: ${b.nameO}, Best before: ${b.datExp}, Nutrition: ${b.cals}`);
    }
    
  }