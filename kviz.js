
// seznam otázek a odpovědí v nějaké struktuře - nejlépe v objektu //

const questions = [
    {
        otazka: 'Co je ikonická hračka z 80. let',
        obrazek: 'obrazky/moncicak.jpg',
        odpovedi: [
            'Kočičák',
            'Mončičák',
            'Opičák'
        ],
        spravna: 0, //dává se index pole//
    },
    {
        otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
        obrazek: 'obrazky/ovoce.jpg',
        odpovedi: [
            'Kokos',
            'Melounek',
            'Jahoda',
            'Ani jedna z možností'
        ],
        spravna: 1,
    },
    {
        otazka: 'Pro úspěšné absolvování kurzu je potřeba...',
        obrazek: 'obrazky/pivo.jpg',
        odpovedi: [
            'Umět JavaScript',
            'Chodit po kurzu do hospody'
        ],

        spravna: 1,
    }
];

//Krok 2 - proměnné pro jednotlivlé HTML elementy, které budeme upravovat. Pomocí getElementById získáme přístup do naší HTML struktury//

let questionsBlockElement = document.getElementById("kviz")

let questionBlockElement = document.getElementById("otazka")
let questionContentBlockElement = document.getElementById("obsah")
let questionImageBlockElement = document.getElementById("obrazek")
let questionAnwersElement = document.getElementById("odpovedi")

let odpovedi = []; //po kliknutí na odpověd se zde uloží číslo odpovědi a číslo otázky a až uživatel odpoví na všechny otázky, tak zkontrolujeme s naší správnou odpovedí - answerId:, questionId: //

// odstartování kvízu//

function startQuiz() {
    let currentQuestion = questions[0]   // vybere aktuální otázku s indexem  //

    loadQuestionContent(currentQuestion, 0)   // načte se aktuální otázka s indexem 0 - pomocí funkce pro načtení otázky//
}



function submitAnswer(answerId, questionId) {

    let odpoved = {
        odpovedId: answerId,
        otazkaId: questionId
    }
    odpovedi.puhs(odpoved) // vloží odpovedi do pripraveného prázdného pole//

    let currentQuestion = questions[questionId + 1] //pokračujeme další otázkou po uložení první otázky do pole//
    if (currentQuestion != undefined) {              // funkce pro ověření, že je definována další otázka//
        loadQuestionContent(currentQuestion, questionId + 1)
    } else {                                     // pokud není další otázka, tak se shrnou odpovědi
        completeQuiz(odpovedi)
    }
}

//funkce pro načtení otázky - tato funkce vezme naši otázku s celým obsahem (tj. otázka, obrázek,odpovedi spravna  odpoved) se kterým budu pracovat //
function loadQuestionContent(question, indexQuestion) {

    questionBlockElement.textContent = question.otazka

    questionAnwersElement.innerHTML = ""  // pred načtenim odpovedi je musime vymazat, jinak se budou pořád přidávat pod sebe//
    questionImageBlockElement.src = "obrazky/" + question.obrazky

    question.odpovedi.forEach((odpoved, index) => {  //projedu odpovědi v otázce//

        let answer = document.createElement("li")  // vytvořím nový element li//
        answer.textContent = odpoved              // zadám odpověd do textContent//
        answer.setAttribute('data-answer', index);  //dataset - ted nevyuživame//
        answer.setAttribute('class', 'myAnswer');
        answer.setAttribute('onClick', 'submitAnswer(' + index + ',' + indexQuestion + ')');
        questionAnwersElement.appendChild(answer) //dáme do našich odpovědí a tím se vygeneruje celý HTML obsah našich odpovědí//
    });
}







