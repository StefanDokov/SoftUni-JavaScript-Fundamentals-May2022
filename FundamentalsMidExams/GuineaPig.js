function solve(inputt) {
    let food = Number(inputt[0]) * 1000;
    let hay = Number(inputt[1]) * 1000;
    let cover = Number(inputt[2]) * 1000;
    let debelan = Number(inputt[3]) * 1000;
   
for (let i = 1;i <= 30;i++){
   food -= 300;
   if (i % 2 == 0){
     hay -= food * 0.05;
   }
   if (i % 3 == 0){
    cover -= 1 / 3 * debelan;
   }
   if (food <= 0 || hay <= 0 || cover <= 0){
    return console.log(`Merry must go to the pet store!`);
   }

}
food = food / 1000;
hay = hay / 1000;
cover = cover / 1000;
return console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);


} 