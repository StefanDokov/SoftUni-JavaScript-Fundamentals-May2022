function solve(objects) {
    let bookStore = {};
    for (let obj of objects) {
        if (obj.includes("->")){
            let [id, genre] = obj.split(" -> ");
            if (!bookStore.hasOwnProperty(id)){
                bookStore[id] = {};
                bookStore[id].num = 0;
                bookStore[id].name = genre;
                bookStore[id].books = {}
            }
        }
        if (obj.includes(": ")){
           let parts = obj.split(": ");
           let nami = parts[0];
           let twoParts = parts[1].split(", ");
           let avtor = twoParts[0];
           let kind = twoParts[1];
           for (let hi in bookStore) {
            if (bookStore[hi].name == kind){
                bookStore[hi].num += 1;
                bookStore[hi].books[nami] = avtor;
            }
           }

        }
    }
    let sorted = Object.entries(bookStore)
    .sort((a,b) => b[1].num - a[1].num)
    .forEach(el => { console.log(`${el[0]} ${bookStore[el[0]].name}: ${bookStore[el[0]].num}`)
    for (let l in el[1].books) {
        console.log(`--> ${l}: ${el[1].books[l]}`);
    }
    
});
    
}