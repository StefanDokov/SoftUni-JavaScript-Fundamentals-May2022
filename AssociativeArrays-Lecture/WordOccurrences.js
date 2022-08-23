function solve(obje) {
    let yes = {};
    
    obje.forEach (el => {
        if (yes.hasOwnProperty(el)) {
            yes[el] += 1;
        } else {
        yes[el] = 1;
        }
    });
    const sortable = Object.fromEntries(
        Object.entries(yes).sort(([,a],[,b]) => b-a)
    );
    
    for(let i in sortable) {
        console.log(`${i} -> ${yes[i]} times`);
    }
     
       
}