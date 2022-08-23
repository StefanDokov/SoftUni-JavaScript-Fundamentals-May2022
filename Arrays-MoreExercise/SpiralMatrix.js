function solve(n, m) {
 
    let yes = [];
    let ye = n;
    let op = m;
     for (let i = 0;i < ye;i++){
        yes[i]=[];
        for(let k = 0;k < m;k++){
          yes[i][k] = 0;
        }
        
      }
       let top = 0;
       let bot = ye - 1;
       let left = 0;
       let right = op - 1;
    
       let index = 1;
       let direction = 0;
       while (top <= bot && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let m = left; m <= right; m++) {
                    yes[top][m] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let n = top; n <= bot; n++) {
                    yes[n][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let m = right; m >= left;m--) {
                    yes[bot][m] = index++;
                }
                bot--;
                direction++;
                break;
            default:
                for (let n = bot; n >= top; n--) {
                    yes[n][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }
     
    console.log(yes.map(r => r.join(" ")).join("\n"));
    
    }