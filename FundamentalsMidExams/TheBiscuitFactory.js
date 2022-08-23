function solve(inputt) {
    let go = inputt.slice().map(Number);
    let product = go[0];
    let workers = go[1];
    let monthly = go[2];
    let sum = 0;

    let days = 1;
    while (days <= 30){
      if (days % 3 == 0){
        product *= 0.75;
      }
      sum += Math.trunc(product * workers);
      product = go[0];

      days++;
    }
    let diff = Math.abs(monthly - sum);
    
    console.log(`You have produced ${sum} biscuits for the past month.`);
    let perCent = diff/monthly * 100;
    if (monthly > sum){
      console.log(`You produce ${perCent.toFixed(2)} percent less biscuits.`);
    }
    else {
      console.log(`You produce ${perCent.toFixed(2)} percent more biscuits.`);
    }


 } 