function solve(input) {
    let perCent = 0;
    for (let i = 0;i < input.length;i++){
        let service = input[i];
        switch(service){
            case "soap":
                perCent += 10;
                break;
                case "water":
                    perCent *= 1.2;
                    break;
                    case "vacuum cleaner":
                        perCent *= 1.25;
                        break;
                        case "mud":
                            perCent *= 0.9;
                            break;
        }
    }
    console.log(`The car is ${perCent.toFixed(2)}% clean.`);

}