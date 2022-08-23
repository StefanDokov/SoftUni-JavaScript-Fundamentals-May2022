function solve(n, m) {
    let huh = "";
    let suma = 0;
     for (let i = n; i <= m;i++){
      huh += `${i} `;
      suma += i;
     }
     console.log(huh);
     console.log(`Sum: ${suma}`);
  }