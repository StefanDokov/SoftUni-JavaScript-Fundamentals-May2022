function solve(inputt) {
    let lekcii = inputt.slice().map(Number);
    let studenti = lekcii.shift();
    let brojLekcii = lekcii.shift();
    let addBonux = lekcii.shift();

    let maxBonux = 0;
    let lections = 0;
    for (let i = 0;i < lekcii.length;i++){
       let prisustvie = lekcii[i];
       let totBon = prisustvie / brojLekcii * (5 + addBonux);
       if (totBon > maxBonux){
        maxBonux = totBon;
        lections = prisustvie;
       }



    }
    console.log(`Max Bonus: ${Math.round(maxBonux)}.`);
    console.log(`The student has attended ${lections} lectures.`);

 }