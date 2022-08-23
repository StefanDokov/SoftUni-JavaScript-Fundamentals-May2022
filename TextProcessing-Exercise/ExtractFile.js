function partyTime(a) {
    let me = a.split("\\");
    let go = me[me.length - 1];
    let sup = go.split(".");
    let fileName = sup.pop();
    console.log(`File name: ${sup.join(".")}`);
    console.log(`File extension: ${fileName}`);

}