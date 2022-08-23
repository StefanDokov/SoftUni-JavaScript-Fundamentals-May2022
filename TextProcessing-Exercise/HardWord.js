function partyTime(a) {
    let sentence = a[0];
    let b = a[1];
    let words = sentence.split(" ");
    
    let oom = 0;
    for (let x of b) {
  
        for(let i = 0;i < words.length;i++) {
           let word = words[i];
           oom = word.length;
           if (word.includes("_")) {
             let me = "";
             if (word.endsWith(".")){
                 oom = word.length - 1;
                 me = ".";
             }
             if (word.endsWith(",")) {
                 oom = word.length - 1;
                 me = ",";
             }
             if (x.length == oom) {
                words[i] = x + me;
             }
           }
        }
     }
    
   console.log(words.join(" "));
 }