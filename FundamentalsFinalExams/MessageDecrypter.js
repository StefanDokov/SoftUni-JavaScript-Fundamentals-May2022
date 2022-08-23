function solve(objects) {
    let rounds = Number(objects.shift());
    let petternone = /\B([$|%])(?<text>[A-Z][a-z]{2,})\1: /g;
    let pettertwo = /\[\d+\]\|\B/g;
    while (rounds > 0){
        let mesage = objects.shift();
        let h = mesage.match(petternone);
        let g = mesage.match(pettertwo);
        if (h == null || g == null || g.length != 3){
            console.log(`Valid message not found!`);
           
        } else {
            let text = h[0].substr(1,h[0].length - 4);
            let nums = [];
            for (let p of g) {
                let u = Number(p.substr(1,p.length - 3));
                nums.push(u);
            }
            let code = "";
            for (let me of nums){
                let t = String.fromCharCode(me);
                code += t;
            }
            console.log(`${text}: ${code}`);
        }
        
        rounds--;
    }
    
}