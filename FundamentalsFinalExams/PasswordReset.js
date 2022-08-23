function passwordReset(data) {
    let potentialPass = data.shift();
 
    for (let index = 0; index < data.length; index++) {
        let line = data[index];
        let command = line.split(' ').shift();
        switch (command) {
            case 'TakeOdd':
                let  newRawPass = '';
                for (let i = 0; i < potentialPass.length; i++) {
                    let el = potentialPass[i];
                    if (i % 2 !== 0) {
                        newRawPass += el;
                    }
                    
                }
            potentialPass = newRawPass;
            console.log(potentialPass);
            break;
            case 'Cut':
                let [commandCut, index, length] = line.split(' ');
                let toRemove = potentialPass.substring(Number(index), Number(index)+Number(length));
                potentialPass = potentialPass.replace(toRemove, '');
                console.log(potentialPass);
                break;
            case 'Substitute':
                let [commandSubstitude, substring, substitude] = line.split(' ');
                if (potentialPass.includes(substring)) {
                    potentialPass = potentialPass.replace(new RegExp(substring, 'g'), substitude);
                    console.log(potentialPass);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
            case 'Done':
                console.log(`Your password is: ${potentialPass}`);
                break;
        }
    }
}