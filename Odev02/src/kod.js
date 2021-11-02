let firstTime2 = true;
let firstTime3 = true;
let firstTime = true;
var kopeksayar = 0;
var x;
var y;
var z;
var HakSayac = 0;//kullanıcı hakkı için
Rand();

function Rand() {
    window.x = Math.floor(Math.random() * 2) + 1;
    window.y = Math.floor(Math.random() * 2) + 1;
    window.z = Math.floor(Math.random() * 2) + 1;
    var Cont = x + y + z;
    if (Cont > 4 || Cont === 3) {
        Rand();

    }
}

function CardButton() {
    if (firstTime3) {
        firstTime3 = false;
        CardFunction();

    }
}

function CardButton1() {
    if (firstTime2) {
        firstTime2 = false;
        CardFunction1();
    }
}

function CardButton2() {
    if (firstTime) {
        firstTime = false;
        CardFunction2();
    }
}


function CardFunction() {
    HakSayac++;
    if (HakSayac < 3) {
        if (x === 1) {
            document.getElementById("img0").src = "kopek.png";
            kopeksayar++;
            if (kopeksayar == 2) {
                kaybetti();
            }
        } else {
            document.getElementById("img0").src = "kedi.png";
            kazandi();
        }
    }
}

function CardFunction1() {
    HakSayac++;
    if (HakSayac < 3) {
        if (y === 1) {
            document.getElementById("img1").src = "kopek.png";
            kopeksayar++;
            if (kopeksayar == 2) {
                kaybetti();
            }
        } else {
            document.getElementById("img1").src = "kedi.png";
            kazandi();
        }
    }
}

function CardFunction2() {
    HakSayac++;
    if (HakSayac < 3) {
        if (z === 1) {
            document.getElementById("img2").src = "kopek.png";
            kopeksayar++;
            if (kopeksayar == 2) {
                kaybetti();
            }
        } else {
            document.getElementById("img2").src = "kedi.png";
            kazandi();
        }
    }
}

function kaybetti() {
    document.getElementById("alanId").style.display = "none";
    document.getElementById("yenildiId").style.display = "inline";
    HakSayac = 4;
}

function kazandi() {
    document.getElementById("alanId").style.display = "none";
    document.getElementById("kazandiId").style.display = "inline";
    HakSayac = 4;
}




