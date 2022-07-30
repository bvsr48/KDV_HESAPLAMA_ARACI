

function islem() {
    var veri1   =   document.getElementById("tutar").value;
    var tutar   =   Number(veri1);
    var veri2   =   document.getElementById("kdv").value;
    var kdvor   =   Number(veri2);
    
    function kdvharic(toptutar, kdvoran) {
        var kdvtutari   =   toptutar*kdvoran/100;
        var islemyaz       =   toptutar+kdvtutari + " TL";
        var kdvtutariyaz=   kdvtutari + " TL"
        document.getElementById("dahiltutar").innerHTML=islemyaz;
        document.getElementById("dahiltutarkdv").innerHTML=kdvtutariyaz;
    }
    kdvharic(tutar,kdvor);

    function kdvdahil(toptutar, kdvoran) {
        var kdvharic        =   toptutar/(1+kdvoran/100);
        var islemyaz        =   kdvharic + " TL";
        var kdvtutariyaz    =   toptutar-kdvharic + " TL";
        document.getElementById("harictutar").innerHTML=islemyaz;
        document.getElementById("harictutarkdv").innerHTML=kdvtutariyaz;
    }
    kdvdahil(tutar,kdvor);


    
    }