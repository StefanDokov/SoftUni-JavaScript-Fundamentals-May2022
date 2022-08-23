function partyTime(a) {
    let bothvolews = a[0] + a[1];
    let word = a[2];
    let h = 0;
    let index = 0;
    while (index < bothvolews.length) {
      
         let vowsearch = bothvolews[index];
         index++;
         if (vowsearch == "a"|| vowsearch == "e" || vowsearch == "i" || vowsearch == "o" || vowsearch == "u"){
             if (h == word.length) {
                 h = 0;
             }
             let go = word[h];
             bothvolews = bothvolews.replace(vowsearch, go.toUpperCase());
             h++;
             
             
         }
      
    }
    
   let you = bothvolews.split("");
   let jo = you.reverse();
   console.log(`Your generated password is ${jo.join("")}`);
 }