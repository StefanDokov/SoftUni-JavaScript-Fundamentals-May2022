function solve(input) {
  
    let go = input.slice();
    let version = go.pop();
    let elnts = Number(go.shift());
   
   class Song {
     constructor(type, name, duration){
       this.type = type;
       this.name = name;
       this.duration = duration;
     }
     call(){
       console.log(this.name);
     }
   }
   for (let i = 0;i < elnts;i++){
     let sup = go[i].split("_");
     let tip = sup[0];
     let ime = sup[1];
     let vreme = sup[2];
     let mySong = new Song(tip, ime, vreme);
     if (version == "all"){
       mySong.call();
     }
     if (tip == version){
        mySong.call();
     }
   
   }
   
   }