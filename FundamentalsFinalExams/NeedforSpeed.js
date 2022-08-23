function bonus(input) {
    let cycl = Number(input.shift());
    let cars = {};
    for (let i = 1; i <= cycl; i++) {
      let k = input.shift().split("|");
      let carN = k[0];
      let kmtri = Number(k[1]);
      let fueLz = Number(k[2]);
      cars[carN] = {
        miles: kmtri,
        fuel: fueLz
      };
  
    }
    let index = 0;
    let drive = input[index];
    index++;
    while (drive != "Stop") {
      let [whattodo, carso, kmspent, fuelneed] = drive.split(" : ");
      switch (whattodo) {
        case "Drive":
          if (cars[carso].fuel < Number(fuelneed)) {
            console.log(`Not enough fuel to make that ride`);
            break;
          } else {
            console.log(`${carso} driven for ${kmspent} kilometers. ${fuelneed} liters of fuel consumed.`);
            cars[carso].fuel -= Number(fuelneed);
            cars[carso].miles += Number(kmspent);
            if (cars[carso].miles >= 100000) {
              console.log(`Time to sell the ${carso}!`);
              delete cars[carso];
            }
          }
          break;
        case "Refuel":
          if (75 - cars[carso].fuel < Number(kmspent)) {
            kmspent = 75 - cars[carso].fuel;
            cars[carso].fuel += Number(kmspent);
          } else {
            cars[carso].fuel += Number(kmspent);
          }
          console.log(`${carso} refueled with ${kmspent} liters`);
          break;
        case "Revert":
          if (cars[carso].miles - Number(kmspent) < 10000) {
            kmspent = cars[carso].miles - 10000
            cars[carso].miles = 10000;
            break;
          } else {
            cars[carso].miles -= Number(kmspent);
  
          }
          console.log(`${carso} mileage decreased by ${kmspent} kilometers`)
          break;
  
  
      }
  
      drive = input[index];
      index++;
  
    }
    for (let b in cars) {
      console.log(`${b} -> Mileage: ${cars[b].miles} kms, Fuel in the tank: ${cars[b].fuel} lt.`)
    }
  
  }