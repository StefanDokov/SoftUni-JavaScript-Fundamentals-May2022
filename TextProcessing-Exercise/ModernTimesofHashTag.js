function partyTime(a) {
    let me = a.split(" ");
    for (let i of me) {
       
        if (i.startsWith("#") && i.length > 1){
            if (/\d/.test(i)){
                continue;
            } else {
            console.log(i.slice(1));
        }
        }
}
}