function bonus(input) {
    let circle = Number(input.shift());
    let songs = {};
    while (circle > 0) {
      let [songN, compo, keyz] = input.shift().split("|");
      songs[songN] = {
        comp: compo,
        key: keyz
      };
      ;
      circle--;
    }
    let index = 0;
    let cycling = input[index];
    index++;
    while (cycling != "Stop") {
      let yes = cycling.split("|");
      let doing = yes[0];
      let partone = yes[1]; 
      let partwo = yes[2];
      let parthree = yes[3];
      switch (doing) {
        case "Add":
          if (!songs.hasOwnProperty(partone)) {
            songs[partone] = {
              comp: partwo,
              key:parthree
            };
            
            console.log(`${partone} by ${partwo} in ${parthree} added to the collection!`);
          } else {
            console.log(`${partone} is already in the collection!`);
  
          }
          break;
        case "Remove":
          if (songs.hasOwnProperty(partone)){
          delete songs[partone];
          console.log(`Successfully removed ${partone}!`);
          } else {
            console.log(`Invalid operation! ${partone} does not exist in the collection.`);
          }
          break;
        case "ChangeKey":
           if (songs.hasOwnProperty(partone)){
            songs[partone].key = partwo;
            console.log(`Changed the key of ${partone} to ${partwo}!`);
           } else {
            console.log(`Invalid operation! ${partone} does not exist in the collection.`);
           }
           
           break;
  
      }
  
      cycling = input[index];
      index++;
    }
    for (let b in songs) {
      console.log(`${b} -> Composer: ${songs[b].comp}, Key: ${songs[b].key}`);
    }
  
  }