function solve(obje) {
    let go = obje.slice();
    let bunn = go.pop().split(" ");
    let yes = [];
    go.forEach(el => {
        yes.push(el.split(" ").map(Number));
    })
    let sum = 0;
    let kilz = 0;
    for (let i = 0;i < bunn.length;i++) {
        let ok = bunn[i].split(",");
        let ro = Number(ok[0]);
        let col = Number(ok[1]);
        let bom = yes[ro][col];
        if (bom == 0) {
            continue;
        }
        sum += bom;
        kilz++;
        for (let s = ro - 1;s <= ro + 1;s++){
            if (s < 0) {
                s = 0;
            }
            if (s > yes.length - 1) {
                break;
            }
            for(let k = col - 1;k <= col + 1;k++){
                if (k < 0){
                    k = 0;
                }
                if (k > yes[s].length - 1) {
                   break;
                }
                yes[s][k] -= bom;
                if (yes[s][k] < 0){
                    yes[s][k] = 0;
                }
            }

        }
    
    }
    for(let p = 0;p < yes.length;p++){
        for (let l = 0;l < yes[p].length;l++){
            if (yes[p][l] > 0) {
                sum += yes[p][l];
                kilz++;
            }
        }
    }
    console.log(sum);
    console.log(kilz);
}