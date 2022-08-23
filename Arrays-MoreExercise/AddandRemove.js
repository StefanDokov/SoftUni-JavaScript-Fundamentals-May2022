function solve(input) {
    let s = input.length;
    let sum = [];
    for (let i = 0;i < s;i++){
      let oh = input[i];
      switch(oh){
            case "add": 
                       sum.push(i + 1);
                       break;
                       case "remove":
                         sum.pop();
                         break;
              
      }
      
    }
    if (sum.length < 1){
      console.log("Empty");
    }
    else {
        console.log(sum.join(" "));
    }
    }