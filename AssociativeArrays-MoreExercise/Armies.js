function partyTime(army) {
    let armies = {};
  for (let el of army) {
    if(el.includes("arrives")){
       let mo = el.split(" arrives");
       let namo = mo[0];
       if (!armies.hasOwnProperty(namo)){
          armies[namo] = {};
          armies[namo].num = 0;
          armies[namo].vids = {}
       }
    } else if (el.includes(":")) {
       let ko = el.split(": ");
       let nami = ko[0];
       let [anami,acont] = ko[1].split(", ");
       if (armies.hasOwnProperty(nami)) {
          armies[nami].vids[anami] = Number(acont);
          armies[nami].num += Number(acont);
       }
    } else if (el.includes("+")){
       let [ime,adding] = el.split(" + ");
       for (let eli in armies) {
          if (armies[eli].vids.hasOwnProperty(ime)){
             armies[eli].vids[ime] += Number(adding);
             armies[eli].num += Number(adding);
          }
       }
 
    } else if (el.includes("defeated")) {
       let gg = el.split(" defeated");
       let bb = gg[0];
       delete armies[bb];
    }
 
  }
  let sorted = Object.entries(armies).sort((a,b) => b[1].num - a[1].num);
  sorted.forEach (element => {
      console.log(`${element[0]}: ${element[1].num}`);
      delete element[1].num;
      let gogo = Object.entries(element[1].vids).sort((az,bz) => bz[1] - az[1]);
             gogo.forEach(elo => {
                console.log(`>>> ${elo[0]} - ${elo[1]}`);
            });
      
  });
 
 }