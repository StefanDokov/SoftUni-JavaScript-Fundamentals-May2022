function solve(input) {
  
    for (let i = 0;i < input.length;i++){
      let namo = input[i];
      let g = {}
      g.name = namo;
      g.nomber = namo.length;
      console.log(`Name: ${g.name} -- Personal Number: ${g.nomber}`);

    }
}