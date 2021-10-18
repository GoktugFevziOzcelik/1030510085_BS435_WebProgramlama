let firstTime2 = true;
let firstTime3 = true;
let firstTime = true;
var control1 = false;
var control2 = false;
var control3 = false;
var succes = false;
let succesful = false;
var x;
var y;
var z;
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
        if (control1) {
            window.succes == true;
        }
    }
}

function CardButton1() {
    if (firstTime2) {
        firstTime2 = false;
        CardFunction1();
        if (control2) {
            window.succes == true;
        }
    }
}

function CardButton2() {
    if (firstTime) {
        firstTime = false;
        CardFunction2();
        if (control3) {
            window.succes == true;
        }
    }
}


function CardFunction() {


    if (x === 1) {
        document.getElementById("img0").src = "kopek.png";
    } else {
        document.getElementById("img0").src = "kedi.png";
        window.control1 == true;
    }

}

function CardFunction1() {


    if (y === 1) {
        document.getElementById("img1").src = "kopek.png";
    } else {
        document.getElementById("img1").src = "kedi.png";
        window.control2 == true;
    }
}

function CardFunction2() {


    if (z === 1) {
        document.getElementById("img2").src = "kopek.png";
    } else {
        document.getElementById("img2").src = "kedi.png";
        window.control3 == true;
    }

}

if (firstTime===false && firstTime2===false && firstTime3===true) {
    if (succes) {
        succesful = true;
        document.getElementById('alanId').innerHTML = 'Tebrikler Kazandınız';
    } else {
        document.getElementById('alanId').innerHTML = 'Başaramadık abi';
    }

}
if (firstTime3===false && firstTime2===false && firstTime===true) {
    if (succes) {
        succesful = true;
        document.getElementById('alanId').innerHTML = 'Tebrikler Kazandınız';
    }else {
        document.getElementById('alanId').innerHTML = 'Başaramadık abi';
    }
}
if (firstTime===false && !firstTime3===false && firstTime2===true) {
    if (succes) {
        succesful = true;
        document.getElementById('alanId').innerHTML = 'Tebrikler Kazandınız';
    } else {
        document.getElementById('alanId').innerHTML = 'Başaramadık abi';
    }
}




