function solve(obje) {
    let yes = {};
    let op = [];
    for (let i of obje) {
        let [y, n] = i.split(", ");
        yes[n] = y;
    }
    
    for (let h in yes) {
        if (yes[h] == "IN"){
            op.push(h);
        }
    }
    if (op.length < 1) {
        console.log(`Parking Lot is Empty`);
    }
    let sorted = op.sort();
    for (let z of sorted) {
        console.log(z);
    }
  
}