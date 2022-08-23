function solve(input, imput) {
  
    let go = input.slice();
    let me = imput.slice();
  
    
    
   for (let i = 0; i < me.length;i++){
      if (i % 2 == 0){
        let vid = me[i];
        let kol = Number(me[i + 1]);
        if (go.includes(vid)){
          let s = go.indexOf(vid) + 1;
          let dif = Number(go[s]) + kol;
          go.splice(s,1,dif);
        }
        else {
          go.push(vid);
          go.push(kol);
        }
      }
      
   }
   class Spisuk {
      constructor (name, kol){
        this.name = name;
        this.kol = kol;
      }
      call(){
        console.log(`${this.name} -> ${this.kol}`);
      }
   }
  
   let g = go.length / 2;
   while (g > 0) {
      let imo = go.shift();
      let kolo = go.shift();
      let mySpis = new Spisuk (imo, kolo);
      mySpis.call();
      g--;
   }
       
   }