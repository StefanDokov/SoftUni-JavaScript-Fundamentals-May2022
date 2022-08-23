function solve(input) {
  
    let summin = 0;
    let summax = 0;
    let el = 0;
    let eha = false;
    for (let es = 0;es < input.length;es++) {
      if (el != es){
        summin = 0;
        summax = 0;
      }
      for (let i = es + 1;i < input.length;i++){
        summax += Number(input[i]);
      }
      for (let k = es - 1;k >= 0;k--){
        summin += Number(input[k]);
      }
      
      if (summax == summin){
        console.log(es);
        eha = true;
        break;
      }
      el = es;
    }
    if(eha == false){
      console.log("no");
    }
  }