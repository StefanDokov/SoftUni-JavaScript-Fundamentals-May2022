function solve(objects) {
    let follow = {};
    for (let el of objects){
      let [cmnd,indOne,indTwo] = el.split(": ");
      switch(cmnd){
         case "New follower":
            if (!follow.hasOwnProperty(indOne)){
                follow[indOne] = {
                    likes: 0,
                    comments: 0
                }
            }
            break;
        case "Like":
            if (!follow.hasOwnProperty(indOne)){
                follow[indOne] = {
                    likes: Number(indTwo),
                    comments: 0
                }
            } else {
                follow[indOne].likes += Number(indTwo);
            }
            break;
            case "Comment":
                if (!follow.hasOwnProperty(indOne)){
                    follow[indOne] = {
                        likes: 0,
                        comments: 1
                    }
                } else {
                    follow[indOne].comments += 1;
                }
                break;
                case "Blocked":
                    if (!follow.hasOwnProperty(indOne)){
                        console.log(`${indOne} doesn't exist.`)
                        } else {
                        delete follow[indOne];
                    }
                    break;

      }

    }
    let count = Object.keys(follow).length;
    console.log(`${count} followers`);
    for (let g in follow) {
        console.log(`${g}: ${follow[g].likes + follow[g].comments}`);
    }
   
}