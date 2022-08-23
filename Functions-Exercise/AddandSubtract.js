function solve(m, n, o) {
    sum(m,n);
    substract(o);
    
    function sum(m, n) {
        let g = Number(m);
        let b = Number(n);
        return (g + b);
        
    }
    
    function substract(o){
        let k = Number(o);
        console.log(sum(m,n) - k);
    }

}