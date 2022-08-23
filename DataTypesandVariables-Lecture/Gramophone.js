function solve(band, album, song) {
    let sad = band.length;
    let asd = album.length;
    let das = song.length;
    let rota = (sad * asd) * das / 2;
    let dis = rota / 2.5;
    console.log(`The plate was rotated ${Math.ceil(dis)} times.`);
    
 }