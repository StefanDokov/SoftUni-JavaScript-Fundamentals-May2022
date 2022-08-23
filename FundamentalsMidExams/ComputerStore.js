function solve(input) {
    let index = 0;
    let sum = 0;
    let cost = input[index];
    index++;
    let notax = 0;
    let final = 0;
    let diff = 0;

    while (cost != "special" && cost != "regular"){
        let you = Number(cost);
        sumer(you);
        cost = input[index];
        index++;
    }
    if (cost == "special"){
        notax = sum;
        sum *= 1.2;
        diff = sum - notax;
        final = sum * 0.9;
    }
    if (cost == "regular"){
        notax = sum;
        sum *= 1.2;
        diff = sum - notax;
        final = sum;
    }
    if (sum == 0) {
        console.log(`Invalid order!`);
    }
    else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${notax.toFixed(2)}$`);
        console.log(`Taxes: ${diff.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${final.toFixed(2)}$`);
    }





     function sumer(cena){
        if (cena < 0) {
            console.log(`Invalid price!`);
            
        }
        else {
        return sum += cena;
     }
    }

}