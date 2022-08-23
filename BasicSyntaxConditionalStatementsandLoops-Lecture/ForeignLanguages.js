function solve(country) {
    let lang = "";
    switch (country) {
       case "USA":
         case "England":
           lang = "English";
           break;
           case "Spain":
             case "Argentina":
             case "Mexico": 
             lang = "Spanish";
             break;
             default: 
             lang = "unknown";
             break;
             
  
    }
    console.log(lang);
  }