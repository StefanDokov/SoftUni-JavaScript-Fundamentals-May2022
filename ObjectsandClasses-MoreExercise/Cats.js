function solve(input) {
  
    class Cat {
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
      meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }
    let catso = [];
    for (let i = 0;i < input.length;i++){
      let go = input[i].split(" ");
      let namez = go[0];
      let agez = go[1];
      let myCat = new Cat(namez,agez);
      catso.push(myCat);
    }
    for (let kat of catso){
      kat.meow();
    }
      
  
  }