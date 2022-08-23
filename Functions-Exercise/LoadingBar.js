function solve(m) {
    if (m == undefined){
        console.log(`[%%%%%%%%%%]`);
    }
    else {
  let s = `${m}%`;
  let g = m / 10;
  let you = [];
  for (let i = 1;i <= 10;i++){
    you.push(`.`);
  }
  you.unshift(`[`);
  you.push(`]`);
  
  for (let i = 1;i <= g;i++){

  you.splice(i,1,`%`);
  }
  if (g < 10){
  console.log(`${s} ${you.join("")}`);
  console.log(`Still loading...`)
  }
  else {
    console.log(`100% Complete!`);
  }

}
}