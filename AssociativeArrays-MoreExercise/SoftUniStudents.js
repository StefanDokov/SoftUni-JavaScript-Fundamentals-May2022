function solve(input) {
    let courses = {}
    for (let adder of input){
      if (adder.includes(": ")){
        let [vid, mesta] = adder.split(": ");
        if (!courses.hasOwnProperty(vid)) {
          courses[vid] = {};
          courses[vid].places = Number(mesta);
          courses[vid].num = 0;
          courses[vid].students = []
        } else {
          courses[vid].places += Number(mesta);
        }
      } 
      if (adder.includes("joins")) {
        let fixed = adder.replace(" with email","");
        let fixedTwo = fixed.replace(" joins","");
        let ho = fixedTwo.split(" ");
        let user = ho[0];
        let you = user.split("[");
        let username = you[0];
        let crediti = Number(you[1].substring(0,you[1].length - 1));
        let mail = ho[1];
        let kurs = ho[2];
        if (courses.hasOwnProperty(kurs) && courses[kurs].places > 0) {
          courses[kurs].students.push({
            userN: username,
            cred: crediti,
            eml: mail
          });
          
          courses[kurs].places -= 1;
          courses[kurs].num += 1;
  
        }
      }
  
    }
    let sorted = Object.entries(courses)
        .sort((a,b) => b[1].num - a[1].num)
        .forEach(el => { console.log(`${el[0]}: ${el[1].places} places left`);
           delete el[1].places;
           delete el[1].num;
           Object.entries(el[1].students)
            .sort((c,v) => v[1].cred - c[1].cred)
            .forEach(eli => {
              console.log(`--- ${eli[1].cred}: ${eli[1].userN}, ${eli[1].eml}`);
            })
        })
  }