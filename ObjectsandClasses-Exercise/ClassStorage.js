class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.totalCost = 0;
      this.i = 0;
      this.storage = [];
    }
  
    addProduct(oops) {
      this.capacity -= oops.quantity;
      this.totalCost += oops.price * oops.quantity;
        
      this.storage.push(oops);
        
      }
    
    getProducts() {
        let res = "";
        this.storage.forEach((el,m) => {
          res += JSON.stringify(el);
          if (m < this.storage.length - 1){
            res += "\n";
          }
          
        })
        return res;
      
    }
  }