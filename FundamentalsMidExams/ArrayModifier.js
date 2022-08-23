function solve(inputt) {
    let input = inputt.slice();
    let numbers = input.shift().split(" ").map(Number);
    let index = 0;
    let action = input[index];
    index++;


    while (action != "end"){
        let act = action.split(" ");
        let gg = act[0];
        let ind = Number(act[1]);
        let num = Number(act[2]);
        switch(gg){
          case "swap":
            let h = numbers[ind];
            let g = numbers[num];
            numbers[ind] = g;
            numbers[num] = h;
            break;
            case "multiply":
              let p = numbers[ind] * numbers[num];
              numbers[ind] = p;
              break;
              case "decrease":
                numbers = numbers.map(x => x -= 1);
                break;

        }

        action = input[index];
        index++;

    }
    console.log(numbers.join(", "));
 }