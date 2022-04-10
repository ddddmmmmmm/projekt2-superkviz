const otazky = [
    {
        otazka: 'Co je ikonická hračka z 80. let',
        obrazek: 'obrazky/moncicak.jpg',
        odpoved: ['Kočičák', 'Mončičák', 'Opičák'],
        spravnaOdpoved: 'Mončičák',
    },
    {
        otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
        obrazek: 'obrazky/ovoce.jpg',
        odpoved: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedna z možností'],
        spravnaOdpoved: 'Jahoda',
    },
    {
        otazka: 'Pro úspěšné absolvování kurzu je potřeba...',
        obrazek: 'obrazky/pivo.jpg',
        odpoved: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
        spravnaOdpoved: 'Umět JavaScript',
    }
]


let otazka = document.querySelector('#otazka');
let obrazek = document.querySelector('#obrazek');
let moznostJedna = document.querySelector('.moznostJedna');
let moznostDve = document.querySelector('.moznostDva');
let moznostTri = document.querySelector('.moznostTri');

let otazkaCislo = 1;
let i = 0;



function zobrazOtazkuOdpovedi() {
    otazka.innerHTML = otazky[i].otazka;
    poradi.textContent = "Otázka" + otazkaCislo + "/3";
    obrazek.src = otazky[i].obrazek;
    moznostJedna.innerHTML = otazky[i].odpoved[0];
    moznostDva.innerHTML = otazky[i].odpoved[1];
    moznostTri.innerHTML = otazky[i].odpoved[2];
}



