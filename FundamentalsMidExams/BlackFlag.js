function solve(inputt) {
    let days = Number(inputt[0]);
    let plunderDaily = Number(inputt[1]);
    let expectPlunder = Number(inputt[2]);
    let dayPast = 1;
    let totalGain = 0;
    while (dayPast <= days){
        
        if (dayPast % 3 == 0){
            plunderDaily *= 1.5;
        }
        totalGain += plunderDaily;
        plunderDaily = Number(inputt[1]);
        if (dayPast % 5 == 0){
            totalGain *= 0.7;
        }
        
        dayPast++;
    }
    if (dayPast > days) {
        if (totalGain >= expectPlunder){
            return console.log(`Ahoy! ${totalGain.toFixed(2)} plunder gained.`);
        }
        let gpercentage = totalGain/expectPlunder * 100;
        return console.log(`Collected only ${gpercentage.toFixed(2)}% of the plunder.`);
    }
 }