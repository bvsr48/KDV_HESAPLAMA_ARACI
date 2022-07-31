

function islem() {
    var veri1   =   document.getElementById("tutar").value;
    var tutar   =   Number(veri1);
    var veri2   =   document.getElementById("kdv").value;
    var kdvor   =   Number(veri2);
    
    function kdvharic(toptutar, kdvoran) {
        var kdvtutari       =   toptutar*kdvoran/100;
        var islemyaz1       =   (toptutar+kdvtutari).toFixed(10) + " TL";
        var islemyaz        =   String(islemyaz1).replace('.', ',');
        var kdvtutariyaz1   =   kdvtutari.toFixed(10) + " TL";
        var kdvtutariyaz    =   String(kdvtutariyaz1).replace('.', ',');
        document.getElementById("dahiltutar").innerHTML=islemyaz;
        document.getElementById("dahiltutarkdv").innerHTML=kdvtutariyaz;
    }
    kdvharic(tutar,kdvor);

    function kdvdahil(toptutar, kdvoran) {
        var kdvharic        =   toptutar/(1+kdvoran/100);
        var islemyaz1       =   kdvharic.toFixed(10) + " TL";
        var islemyaz        =   String(islemyaz1).replace('.', ',');
        var kdvtutariyaz1   =   (toptutar-kdvharic).toFixed(10) + " TL";
        var kdvtutariyaz    =   String(kdvtutariyaz1).replace('.', ',');
        document.getElementById("harictutar").innerHTML=islemyaz;
        document.getElementById("harictutarkdv").innerHTML=kdvtutariyaz;
    }
    kdvdahil(tutar,kdvor);


    
    }