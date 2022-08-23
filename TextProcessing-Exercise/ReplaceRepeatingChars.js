function partyTime(a) {
    let op = a[0];
    let say = `${a[0]}`;
     for (let i = 1;i < a.length;i++){
        let me = a[i];
        if (me != op) {
            say += me;
            op = me;
        }
     }
     console.log(say)
}