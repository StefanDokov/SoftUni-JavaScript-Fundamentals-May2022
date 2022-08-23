function partyTime(news) {
    let stories = {};
    let users = new Set();
    for (let artis of news){
       if (artis.includes("user")){
          let me = artis.split("user ");
          let ime = me[1];
          users.add(ime);
       } else if (artis.includes("article")){
          let su = artis.split("article ");
          let vidstatiq = su[1];
          if (!stories.hasOwnProperty(vidstatiq)){
             stories[vidstatiq] = {};
             stories[vidstatiq].likes = 0;
          }
       } else if (artis.includes("posts on")){
          let you = artis.split(" posts on ");
          let usera = you[0];
          let drugi = you[1];
          let da = drugi.split(": ");
          let stat = da[0];
          let say = da[1];
          let [titl,saying] = say.split(", "); 
          if (users.has(usera)) {
             if (stories.hasOwnProperty(stat)){
                if (!stories[stat].hasOwnProperty(usera)){
                   stories[stat][usera] = {};
                   stories[stat][usera][titl] = saying;
                   stories[stat].likes += 1;
                } else {
                 stories[stat][usera][titl] = saying;
                 stories[stat].likes += 1;
                }
             }
 
          }
       }
 
    }
    let sorted = Object.entries(stories)
        .sort((a,b) => b[1].likes - a[1].likes)
        .forEach(ele => {
          console.log(`Comments on ${ele[0]}`);
          delete ele[1].likes;
          let opo = Object.keys(ele[1]).sort((o,b) => o.localeCompare(b));
          opo.forEach (ero => {
             for (let i in ele[1][ero]) {
                console.log(`--- From user ${ero}: ${i} - ${ele[1][ero][i]}`);
          
             }
             
        });
        })
 
 }