function solve(input) {
    let beso = [];
    let mess = [];
    let huh = 0;
    let start = Number(input[0]);
    for (let i = 1;i < input.length;i++){
  
     let wonder = Number(input[i]);
    
     if (start == wonder){
       if (i < 2){
         mess.push(start);
         huh++;
       }
       
       mess.push(start);
       
       if (mess.length > beso.length){
         beso = mess;
       }
     }
     else {
      start = wonder;
  
      if(mess.length > beso.length){
        beso = mess;
        
      }
      mess = [];
      mess.push(start);
     }
     
    }
    console.log(beso.join(" "));
  }