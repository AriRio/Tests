const englishWordsFameAndFortuneMovies = ["Computer Generated Imagery", "end up", "injury", "motorbike", "reference", "shooting star", "stunt", "stunt double", "stuntman", "drive down", "dive in(to)", "drive through", "fall off", "fall out of", "fall through", "walk through", "jump out of"];
const czechWordsFameAndFortuneMovies = ["počítačem vytvořené obrazy", "skončit", "zranění", "motocykl", "údaj, odkaz", "padající hvězda, meteor", "kaskadérský kousek", "dvojník, kaskadér", "kaskadér", "sjet", "skočit do vody", "projet skrz", "spadnout z", "vypadnout", "propadnout skrz", "projít skrz", "vyskočit z"];

const englishWordsSmartAlecDoors = ["criminal", "fire brigade", "rescue", "roof", "workmen"];
const czechWordsSmartAlecDoors = ["zločinec", "hasiči", "zachránit", "střecha", "dělníci"];

const englishWordsTVShows = ["after a while", "celebrity magazine", "contestant", "desert island", "difficulty", "excitement", "freedom", "gamble", "game show", "game show host", "good looks", "journalist", "luck", "photographer", "round", "sign autographs", "success", "whenever"];
const czechWordsTVShows = ["po chvíli", "časopis o slavných osobnostech", "soutěžící", "opuštěný ostrov", "potíž, problém", "vzrušení", "svoboda", "hrát hazardní hry", "televizní soutěž", "moderátor televizní soutěže", "hezký vzhled", "novinář", "štěstí", "fotograf", "kolo", "rozdávat autogramy", "úspěch", "kdykoli"];

const englishWordsKids = ["clearly", "excuse", "form teacher", "in trouble", "Sorry I'm late.", "these days"];
const czechWordsKids = ["jasně, zcela zřejmě", "omluva, výmluva", "třídní učitel", "v nesnázích", "Omlouvám se, že jdu pozdě.", "v současnosti"];

const germanWordsFamilie = ["Bruder", "Cousin", "Familie", "Geschwister", "Großmutter", "Großvater", "kennen", "Patchworkfamilie", "Schwester", "Sohn", "Tochter", "tot", "Großeltern", "Kind", "lange"];
const czechWordsFamilie = ["bratr", "bratranec", "rodina", "sourozenci", "babička", "dědeček", "vím", "patchworková rodina", "sestra", "syn", "dcera", "mrtvý", "prarodiče", "dítě", "dlouho"];

const prisloviVyznam = ["I ta nejpříjemnější situace nebo předmět s sebou může přinést nějaké následky.", "Hladoví si naloží víc, než mohou sníst. Oči by chtěly, břicho už nemůže.", "Spěchat se nevyplácí. Unáhlená rozhodnutí přinášejí špatné výsledky."];
const prisloviZneni = ["Není růže bez trní.", "Hlad má velké oči.", "Dvakrát měř, jednou řež."];

while (true) {
    let userTopic = chooseTest();
    if (userTopic == "0") {
        break;
    }
    let objektTest = fillTestValues(userTopic);
    let vyhodnoceni = doTest(userTopic, objektTest);
    displayResults(vyhodnoceni);
}


/*****************************************************************************************************/
function chooseTest() {
    let condition = false;
    let userTopic;
    do {
        userTopic = prompt(`Rozhodni, z jakého tématu se chceš nechat prozkoušet: \n1 - English Words Fame And Fortune Movies\n2 - English Words Smart Alec Doors\n3 - English Words TV Shows\n4 - English Words Kids\n5 - German Words Familie\n6 - Přísloví\n0 - konec`);
        if (userTopic == "0" || userTopic == "1" || userTopic == "2" || userTopic == "3" || userTopic == "4" || userTopic == "5" || userTopic == "6") {
            condition = true;
        }
    } while (condition == false)
    return userTopic;
}

/*****************************************************************************************************/
function fillTestValues(userTopic) {

    let translationWords = [];
    let czechWords = [];
    let stringZadani = "";

    switch (userTopic) {
        case "1":
            translationWords = englishWordsFameAndFortuneMovies;
            czechWords = czechWordsFameAndFortuneMovies;
            stringZadani = "Přelož následující slovo do anglického jazyka: ";
            break;
        case "2":
            translationWords = englishWordsSmartAlecDoors;
            czechWords = czechWordsSmartAlecDoors;
            stringZadani = "Přelož následující slovo do anglického jazyka: ";
            break;
        case "3":
            translationWords = englishWordsTVShows;
            czechWords = czechWordsTVShows;
            stringZadani = "Přelož následující slovo do anglického jazyka: ";
            break;
        case "4":
            translationWords = englishWordsKids;
            czechWords = czechWordsKids;
            stringZadani = "Přelož následující slovo do anglického jazyka: ";
            break;
        case "5":
            translationWords = germanWordsFamilie;
            czechWords = czechWordsFamilie;
            stringZadani = "Přelož následující slovo do německého jazyka: ";
            break;
        case "6":
            translationWords = prisloviZneni;
            czechWords = prisloviVyznam;
            stringZadani = "Napiš přísloví odpovídající následujícímu popisu: ";
            break;
        default:
            break;
    }
    let objektTest = { translationWords, czechWords, stringZadani };
    return objektTest;
}

/*****************************************************************************************************/
function doTest(userTopic, objektTest) {

    let translationWords = objektTest.translationWords;
    let czechWords = objektTest.czechWords;
    let stringZadani = objektTest.stringZadani;
    let numberOfErrors = 0;
    let numberOfQuestions = translationWords.length;

    for (let i = 0; i < translationWords.length; i++) {

        let userAnswer = prompt(`${stringZadani} "${czechWords[i]}"`);

        if (userAnswer.toLowerCase() == translationWords[i].toLowerCase()) {
            alert(`Správně: "${userAnswer}" odpovídá "${czechWords[i]}" = "${translationWords[i]}".`);
            //console.log(userAnswer);
        }
        else {
            alert(`Chyba. "${userAnswer}" neodpovídá "${czechWords[i]}" = "${translationWords[i]}".`);
            numberOfErrors++;
        }
    }

    let vyhodnoceni = {
        userTopic: userTopic,
        numberOfQuestions: numberOfQuestions,
        numberOfErrors: numberOfErrors,
    };

    return vyhodnoceni;
}


/*****************************************************************************************************/
function displayResults(vyhodnoceni) {
    alert(`V testu č. ${vyhodnoceni.userTopic} jsi měl celkem ${vyhodnoceni.numberOfErrors} chybných odpovědí a ${vyhodnoceni.numberOfQuestions - vyhodnoceni.numberOfErrors} správných odpovědí. Tvoje úspěšnost činí ${(1 - vyhodnoceni.numberOfErrors / vyhodnoceni.numberOfQuestions) * 100} %.`);
}
