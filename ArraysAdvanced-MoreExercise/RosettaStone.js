function solve(obje) {
    let you = obje.slice();
    let coun = you.shift();
    let go = [];
    for (let i = 0;i < coun;i++){
        go.push(you.shift().split(" ").map(Number));
    }
    let me = [];
    you.forEach(el => {
        me.push(el.split(" ").map(Number));
    });
    let final = "";
    for (let o = 0;o < me.length;o++) {
        let bonus = go.shift();
        let op = bonus.slice();
        
        for (let y = 0;y < me[o].length;y++){
           let ok = bonus.shift();
          
           me[o][y] += ok;
           me[o][y] = me[o][y] % 27;
           if (me[o][y] == 0) {
            me[o][y] = " ";
            final += me[o][y];
            
           } else {
            me[o][y] = String.fromCharCode(me[o][y] + 64);
            final += me[o][y];
           }
           bonus.push(ok);
           
        }
        go.push(op);

        
        }
        
    console.log(final);
}