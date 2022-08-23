function partyTime(a) {
    let start = a[0].charCodeAt(0);
    let end = a[1].charCodeAt(0);
    let sentence = a[2];
    let sum = 0;
    for (let i of sentence) {
       if (start < end) {
       if (i.charCodeAt(0) > start && i.charCodeAt(0) < end) {
           sum += i.charCodeAt(0);
       }
    } else {
       if (i.charCodeAt(0) > end && i.charCodeAt(0) < start) {
           sum += i.charCodeAt(0);
       }
   
    }
   }
     console.log(sum)
   }