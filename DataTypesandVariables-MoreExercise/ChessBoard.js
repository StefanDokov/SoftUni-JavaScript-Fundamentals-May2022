function solve(a) {
    let supreme = "";
    let count = 1;
    supreme += `<div class="chessboard">\n`;
    while (count <= a) {
       supreme += ` <div>\n`;
       for (let i = 1;i <= a;i++){
        if (count % 2 != 0){
          if (i % 2 != 0) {
            supreme += `  <span class="black"></span>\n`;
          }
          else {
            supreme += `  <span class="white"></span>\n`;
          }
        }
          else {
           if (i % 2 != 0) {
             supreme += `  <span class="white"></span>\n`;
           }
           else {
             supreme += `  <span class="black"></span>\n`;
           }
          }
         }
        supreme += ` </div>\n`;
   
        count++;
   
   
   
       }
       if (count > a){
         supreme += `</div>`;
       }
       console.log(supreme);
    }