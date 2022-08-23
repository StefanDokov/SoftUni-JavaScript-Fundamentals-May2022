function partyTime(a,b) {
    let me = a.split(", ");
    let you = b.split(" ");
    for (let i of me) {
        let go = i.length;
        for(let o = 0;o < you.length;o++) {
            if (you[o].includes("*") && you[o].length == go) {
                you[o] = i;
            }
        }
    }
   console.log(you.join(" "))
}