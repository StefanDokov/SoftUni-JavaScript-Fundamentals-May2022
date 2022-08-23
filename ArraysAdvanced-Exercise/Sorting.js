function solve(input) {
    let go = input.slice().map(Number);
    let newli = [];
    let tyrn = Number(Math.round(input.length / 2));
    if (input.length % 2 == 0){
    while (tyrn > 0){
     let maxi = Math.max(...go);
     newli.push(maxi);
     let mini = Math.min(...go);
     newli.push(mini);
     go.splice(go.indexOf(maxi),1);
     go.splice(go.indexOf(mini),1);
     tyrn--;
    }
   } else {
     while (tyrn > 1){
     let maxi = Math.max(...go);
     newli.push(maxi);
     let mini = Math.min(...go);
     newli.push(mini);
     go.splice(go.indexOf(maxi),1);
     go.splice(go.indexOf(mini),1);
     tyrn--;
     }
     newli.push(go[0]);
   }
    console.log(newli.join(" "));
   }