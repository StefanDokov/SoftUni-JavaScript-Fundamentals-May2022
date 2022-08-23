function solve(input) {
    let arr = input[0];
    let go = arr.split(" ");
    let movez = 0;
    let index = 1;
    let who = input[index];
    index++;
    while (who != "end"){
     movez++;
     let g = who.split(" ");
     let fir = Number(g[0]);
     let sec = Number(g[1]);
     let firs = go[fir];
     let secs = go[sec];
     if (fir < 0 || sec < 0 || fir >= go.length || sec >= go.length || fir == sec){
         console.log(`Invalid input! Adding additional elements to the board`);
         let op = `-${movez}a`;
         go.splice(go.length/2,0,op);
         go.splice(go.length/2,0,op);
     }
     else {
     if (firs !== secs){
         console.log(`Try again!`);
     }
     if (firs === secs){
        go.splice(go.indexOf(firs),1);
        let jojo = go.splice(go.indexOf(secs),1);
        console.log(`Congrats! You have found matching elements - ${jojo}!`);
     }
 }
 if (go.length == 0){
     console.log(`You have won in ${movez} turns!`);
     break;
   }
     who = input[index];
     index++;
    }
    if (who == "end"){
       
         console.log(`Sorry you lose :(`);
         console.log(go.join(" "));
       
    }
 }