function solve(input) {
    let wagons = input[0].slice().split(" ");
    let capacy = Number(input[1]);
    
    for (let i = 2;i < input.length;i++){
       let doing = input[i].split(" ");
       if (doing.includes("Add")){
           wagons.push(Number(doing[1]));
       }
       else {
           doing = Number(doing);
           for(let k = 0;k < wagons.length;k++){
              let hora = Number(wagons[k]);
              let svobodni = capacy - hora;
              if (svobodni >= doing){
                let all = doing + hora;
                wagons[k] = all;
                break;
              } else {
                continue;
              }
              
           }
       }
    }
   console.log(wagons.join(" "));
  
     
  }