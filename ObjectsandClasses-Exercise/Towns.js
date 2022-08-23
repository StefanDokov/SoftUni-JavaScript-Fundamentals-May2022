function solve(input) {
  
    for (let i = 0;i < input.length;i++){
      let namo = input[i].split(" | ");
      let g = {}
      g.town = namo[0];
      g.latitude = (Number(namo[1])).toFixed(2);
      g.longitude = (Number(namo[2])).toFixed(2);
      
      console.log(g);

    }
}