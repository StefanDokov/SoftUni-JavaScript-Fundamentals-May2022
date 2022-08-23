function solve(obje) {
    let game = {};
    for (let i of obje) {
        let [name, id] = i.split("->");
        if (!game.hasOwnProperty(name)){
            game[name] = [];
            game[name].push(id);
        } else {
            if (!game[name].includes(id)){
                game[name].push(id);
            }
        }
}
    let sorted = Object.keys(game).sort();
    for (let o of sorted) {
        console.log(`${o}`);
        for (let p of game[o]) {
            console.log(`--${p}`);
        }
    }
    
}