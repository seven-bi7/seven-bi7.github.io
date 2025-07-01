import data from 'testi.json';

let lang = "eng"; // "ita": italiano, "eng": english
let texts = data.ita;

// Elements to write text in
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');
const cAE1 = document.getElementById('citazione-AE-1');
const pAE1 = document.getElementById('paragrafo-AE-1');
const pAE2 = document.getElementById('paragrafo-AE-2');
const pAE3 = document.getElementById('paragrafo-AE-3');
const pAE4 = document.getElementById('paragrafo-AE-4');
const tc1 = document.getElementById('titolo-cards-1');
const tc2 = document.getElementById('titolo-cards-2');

// function to write all texts
function write() {
    const texts_nav = texts.nav;
    nav1.innerHTML = texts_nav[1];
    nav2.innerHTML = texts_nav[2];
    nav3.innerHTML = texts_nav[3];
    nav4.innerHTML = texts_nav[4];
    nav5.innerHTML = texts_nav[5];
    nav6.innerHTML = texts_nav[6];

    cAE1.innerHTML = texts['citazione-AE-1'];

    const texts_pAE = texts["paragrafo-AE"];
    pAE1.innerHTML = texts_pAE["1"];
    if(window.innerWidth > 768) {
        pAE2.style.display = "none";
        pAE3.innerHTML = texts_pAE["3_desktop"];
        pAE4.innerHTML = texts_pAE["4_desktop"];
    } else {
        pAE2.innerHTML = texts_pAE["2"];
        pAE3.innerHTML = texts_pAE["3_mobile"];
    }

    tc1.innerHTML = texts["titolo-cards-1"];
    tc2.innerHTML = texts["titolo-cards-2"];
}

// change language button
window.addEventListener('DOMContentLoaded', () => {
    write();

    document.getElementById('button-lang').addEventListener('click', () => {
        lang = (lang == "ita" ? "eng" : "ita"); 
        texts = data[lang];
        write();
    });
});