function solve(obje) {
    let yes = {};
    obje.forEach (el => {
        let k = el.split(" ");
        let m = k[0];
        let s = k[1];
        if (yes.hasOwnProperty(m)){
            yes[m] = s;
        }else {
        yes[m] = s;
        }
    });
    let imena = Object.keys(yes);
    let phones = Object.values(yes);
    for (let i = 0;i < imena.length;i++){
        console.log(`${imena[i]} -> ${phones[i]}`);
    }   
       
}