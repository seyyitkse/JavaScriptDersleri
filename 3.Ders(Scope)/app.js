var a=5; 
//!bu değişken global scope,her yerden erişebiliriz.

function deneme() {
    console.log(a);
}
deneme();


function deneme2() {
    var sayi=10;
    console.log(sayi);
}

//! console.log(sayi); 
//! bu şekilde hata verir 
//! çünkü sayi değişkeni fonksiyonun içinde tanımlıdır.

function deneme3() {
    if (true) {
        var a=5
    }

    //! buradan a değişkenine erişemeyiz.Hata verecektir.

    else if (true) {
        
    }
}