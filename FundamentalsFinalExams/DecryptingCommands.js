function test(data) {
    let str = data.shift();
    let index = 0;
    let line = data[index];
    index++;

    while (line != "Finish") {
        let [cmnd, firstInd, secondInd] = line.split(" ");
        switch (cmnd) {
            case "Check":
                if (str.includes(firstInd)) {
                    console.log(`Message contains ${firstInd}`);
                } else {
                    console.log(`Message doesn't contain ${firstInd}`);
                }
                break;
            case "Make":
                if (firstInd == "Upper") {
                    str = str.toUpperCase();
                } else if (firstInd == "Lower") {
                    str = str.toLowerCase();
                }
                console.log(str);
                break;
            case "Replace":
                str = str.replace(new RegExp(firstInd, 'g'), secondInd);
                console.log(str);
                break;
            case "Cut":
                firstInd = Number(firstInd);
                secondInd = Number(secondInd);
                if (firstInd < 0 || secondInd > str.length || secondInd < firstInd){
                    console.log(`Invalid indices!`);
                } else {
                    let removee = str.substr(0,firstInd);
                    let removii = str.substr(secondInd + 1);
                    str = removee + removii;
                    console.log(str);
                }
                break;
            case "Sum":
                firstInd = Number(firstInd);
                secondInd = Number(secondInd);
                if (firstInd < 0 || secondInd > str.length || secondInd < firstInd){
                    console.log(`Invalid indices!`);
                } else {
                    let sumer = str.substr(firstInd,secondInd);
                    let g = 0;
                    for(let go of sumer){
                        g += go.charCodeAt(0);
                    }
                    console.log(g)
                }
                break;

        }

        line = data[index];
        index++;
    }

}