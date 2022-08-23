function solve(input) {
    let filmi = [];
  
  
    input.forEach((el)=> {
      if (el.includes("addMovie")){
        let film = el.split("addMovie ");
        let koj = film[1];
        filmi.push({name:koj});
      } else if (el.includes("directedBy")) {
        let filma = el.split(" directedBy ");
        let nam = filma[0];
        let dir = filma[1];
        filmi.forEach((koj) => {
          if (koj.name == nam){
             koj.director = dir;
          }
        });
  
      } else if (el.includes("onDate")) {
        let [namo, date] = el.split(" onDate ");
        filmi.forEach(koj => {
          if (koj.name == namo){
            koj.date = date;
          }
        })
      }
    });
    filmi.forEach(koj => {
      if (koj.name && koj.director && koj.date) {
        console.log(JSON.stringify(koj));
      }
    })
  }