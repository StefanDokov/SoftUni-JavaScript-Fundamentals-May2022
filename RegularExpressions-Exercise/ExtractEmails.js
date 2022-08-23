function bonus(input) {
    let pattern =  /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;
    let me = input.match(pattern);
    for (let b of me) {
    console.log(b)
    }
 }