function solve(num, type, day) {
    let pay = 0;
  
    switch (day) {
      case "Friday":
        if (type == "Students"){
          pay = 8.45;
          if (num >= 30) {
            pay *= 0.85;
          }
        }
        else if (type == "Business") {
          pay = 10.9;
          if (num >= 100) {
            num -= 10;
          }
        }
        else if (type == "Regular"){
          pay = 15;
          if (num >= 10 && num <= 20){
            pay *= 0.95;
          }
        }
        break;
        case "Saturday":
        if (type == "Students"){
          pay = 9.8;
          if (num >= 30) {
            pay *= 0.85;
          }
        }
        else if (type == "Business") {
          pay = 15.6;
          if (num >= 100) {
            num -= 10;
          }
        }
        else if (type == "Regular"){
          pay = 20;
          if (num >= 10 && num <= 20){
            pay *= 0.95;
          }
        }
        break;
        case "Sunday":
        if (type == "Students"){
          pay = 10.46;
          if (num >= 30) {
            pay *= 0.85;
          }
        }
        else if (type == "Business") {
          pay = 16;
          if (num >= 100) {
            num -= 10;
          }
        }
        else if (type == "Regular"){
          pay = 22.5;
          if (num >= 10 && num <= 20){
            pay *= 0.95;
          }
        }
        break;
  }
   let supreme = num * pay;
   console.log(`Total price: ${supreme.toFixed(2)}`);
  }