function solve(n) {
    let wagons = n[1].split(" ");
    let ppl = Number(n[0]);
    
    
       for (let i = 0;i < wagons.length;i++){
        let numSpace = Number(wagons[i]);
        let freeSpace = 4 - numSpace;
        if (ppl < freeSpace || (ppl == freeSpace && i < wagons.length - 1)) {
            
            wagons[i] = Number(wagons[i]) + ppl;
            ppl = 0;
            console.log(`The lift has empty spots!
            ${wagons.join(" ")}`);
            
            break;
        }
        
        if (ppl == freeSpace && i == wagons.length - 1) {
            wagons[i] = 4;
            console.log(wagons.join(" "));
            ppl = 0;
            break;
        }
        if (ppl > freeSpace){
            ppl -= freeSpace;
            wagons[i] = 4;
            }
        
       }
       if (ppl > 0) {
         console.log(`There isn't enough space! ${ppl} people in a queue!
         ${wagons.join(" ")}`)
       }
    
    


}