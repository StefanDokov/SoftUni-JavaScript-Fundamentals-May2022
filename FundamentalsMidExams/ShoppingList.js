function solve(inputt) {
    let newIn = inputt.slice();
    let bag = newIn.shift().split("!");
    let index = 0;
    let listing = newIn[index];
    index++;
    
 
    while (listing != "Go Shopping!"){
     listing = listing.split(" ");
     let action = listing[0];
     let item = listing[1];
       switch(action){
         case "Urgent": 
                 if (!bag.includes(item)){
                     bag.unshift(item);
                 }
                 break;
             case "Unnecessary":
                 if (bag.includes(item)){
                     bag.splice(bag.indexOf(item),1);
                 }    
                 break;
                 case "Correct":
                     let newItem = listing[2];
                     if (bag.includes(item)){
                         bag.splice(bag.indexOf(item),1,newItem);
                     }
                     break;
                     case "Rearrange":
                         if (bag.includes(item)){
                             bag.splice(bag.indexOf(item),1);
                             bag.push(item);
                         }
                         break;
 
 
       }
       
     listing = newIn[index];
     index++;
    }
    if (listing == "Go Shopping!"){
    console.log(bag.join(", "));
 }
 } 