function solve(who) {
  
    let what = JSON.parse(who);
      for (let key of Object.keys(what)){
        console.log(`${key}: ${what[key]}`);
      }
    

}