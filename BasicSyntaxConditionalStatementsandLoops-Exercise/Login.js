function solve(input) {
    let name = input[0];
    let solvo = "";
    let s = name.length - 1;
    let index = 1;
    let numo = 0;
    for (let i = s;i >= 0;i--){
      solvo += name[i];
    }
    let pas = input[index];
    index++;
  
    while (pas !== solvo){
      console.log(`Incorrect password. Try again.`);
      numo++;
      if (numo == 4){
        console.log(`User ${name} blocked!`);
        break;
      }
      pas = input[index];
      index++;
    }
    if (pas == solvo){
      console.log(`User ${name} logged in.`);
    }
  
    
      
  }
  solve(['Acer',
    'login',
    'go',
    'let me in',
    'recA'])