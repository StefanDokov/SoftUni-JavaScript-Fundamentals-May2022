function solve(rad, hei) {
    let vol = hei * Math.PI *(rad * rad) / 3;
   let slant = Math.sqrt((rad * rad) + (hei * hei));
   let area = Math.PI * rad * slant + Math.PI * (rad * rad);
     console.log(`volume = ${vol.toFixed(4)}`);
     console.log(`area = ${area.toFixed(4)}`);
   
   }