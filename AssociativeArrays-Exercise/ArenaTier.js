function solve(input) {
    let go = {}
  
  
   for (let line of input) {
    if (line == "Ave Cesar") {
      break;
    }
    let el = line.split(" ");
    if (el[1] == "->"){
      let teqnic = line.split(" -> ");
      let name = teqnic[0];
      let skil = teqnic[1];
      let level = Number(teqnic[2]);
      if (!go.hasOwnProperty(name)) {
        go[name] = {};
        
      }
      if (!go[name].hasOwnProperty(skil) || go[name][skil] < level) {
        go[name][skil] = level;
      
      }
    } else if (el[1] == "vs") {
     let you = line.split(" vs ");
     let firsGl = you[0];
     let secGl = you[1];
     if (go.hasOwnProperty(firsGl) && go.hasOwnProperty(secGl)) {
        for (let i in go[firsGl]) {
            if (go[secGl].hasOwnProperty(i)) {
              if (go[firsGl][i] > go[secGl][i]) {
                delete go[secGl];
                break;
              } else if  (go[firsGl][i] < go[secGl][i]){
                delete go[firsGl];
                break;
              }
            }
          
        }
  
     }
  
    }
  
      
   }
   for (let key in go) {
    let sum = 0;
    let outsideObj = go[key];
    for (let insideKey in outsideObj) {
        sum += outsideObj[insideKey];
    }
    outsideObj['sum'] = sum;
  }
  
  
   Object.entries(go)
   .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
   .forEach(element => {
       console.log(`${element[0]}: ${element[1].sum} skill`);
       delete element[1].sum;
       Object.entries(element[1])
           .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
           .forEach(element => {
               console.log(` - ${element[0]} <!> ${element[1]}`);
           });
   });
  
}  