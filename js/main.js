console.log('Raman is live now!');

let ltr = "";
let rtl = "";

function writeLTR() {
    ltr = document.getElementById('leftToRight').value;
    newLTR = "";

    for (let i = ltr.length - 1; i >= 0; i--) {
        newLTR += ltr[i];
    }
    document.getElementById('rightToLeft').value = newLTR;
}

function writeRTL() {
    rtl = document.getElementById('rightToLeft').value;
    newRTL = "";

    for (let i = rtl.length - 1; i >= 0; i--) {
        newRTL += rtl[i];
    }
    document.getElementById('leftToRight').value = newRTL;
}