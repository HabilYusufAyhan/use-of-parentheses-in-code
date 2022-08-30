function parantezkontrol(metin) {
    const dizi = metin.split('');

    const sonuc = dizi.reduce(function (previous, char) {
        if (previous < 0){
            return previous;
        }
        if (char === '(') {
            return ++previous;
        }
        if (char === ')') {
            return --previous;
        }
        
       
        return previous;
    }, 0);

    if (!sonuc) {
        console.log(metin + " dengeli yapıda");
    }else{
        console.log(metin + " dengeli olmayan yapıda");
    }
}
parantezkontrol('');