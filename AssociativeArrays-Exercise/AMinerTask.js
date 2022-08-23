function solve(obje) {
    let game = {};
    for (let i = 0;i < obje.length;i += 2) {
        let name = obje[i];
        let amount = Number(obje[i + 1]);
        if (!game.hasOwnProperty(name)) {
            game[name] = amount;
        } else {
            game[name] += amount;
        }

    }
    for (let h in game) {
        console.log(`${h} -> ${game[h]}`);
    }
    
}