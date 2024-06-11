const englishWordsFameAndFortuneMovies = ["Computer Generated Imagery", "end up", "injury", "motorbike", "reference", "shooting star", "stunt", "stunt double", "stuntman", "drive down", "dive in(to)", "drive through", "fall off", "fall out of", "fall through", "walk through", "jump out of"];
const czechWordsFameAndFortuneMovies = ["počítačem vytvořené obrazy", "skončit", "zranění", "motocykl", "údaj, odkaz", "padající hvězda, meteor", "kaskadérský kousek", "dvojník, kaskadér", "kaskadér", "sjet", "skočit do vody", "projet skrz", "spadnout z", "vypadnout", "propadnout skrz", "projít skrz", "vyskočit z"];

const englishWordsSmartAlecDoors = ["criminal", "fire brigade", "rescue", "roof", "workmen"];
const czechWordsSmartAlecDoors = ["zločinec", "hasiči", "zachránit", "střecha", "dělníci"];

const englishWordsTVShows = ["after a while", "celebrity magazine", "contestant", "desert island", "difficulty", "excitement", "freedom", "gamble", "game show", "game show host", "good looks", "journalist", "luck", "photographer", "round", "sign autographs", "success", "whenever"];
const czechWordsTVShows = ["po chvíli", "časopis o slavných osobnostech", "soutěžící", "opuštěný ostrov", "potíž, problém", "vzrušení", "svoboda", "hrát hazardní hry", "televizní soutěž", "moderátor televizní soutěže", "hezký vzhled", "novinář", "štěstí", "fotograf", "kolo", "rozdávat autogramy", "úspěch", "kdykoli"];

const englishWordsKids = ["clearly", "excuse", "form teacher", "in trouble", "Sorry I'm late.", "these days"];
const czechWordsKids = ["jasně, zcela zřejmě", "omluva, výmluva", "třídní učitel", "v nesnázích", "Omlouvám se, že jdu pozdě.", "v současnosti"];


while (true) {
    let userTopic = chooseTest();
    if (userTopic == "0") {
        break;
    }
    let objektDvouPoli = fillTestValues(userTopic);
    doTest(objektDvouPoli);
}


/*****************************************************************************************************/
function chooseTest() {
    let condition = false;
    let userTopic;
    do {
        userTopic = prompt(`Rozhodni, z jakého tématu se chceš nechat prozkoušet: 0 - konec; 1 - English Words Fame And Fortune Movies; 2 - English Words Smart Alec Doors; 3 - englishWordsTVShows; 4 - englishWordsKids.`);
        if (userTopic == "0" || userTopic == "1" || userTopic == "2" || userTopic == "3" || userTopic == "4") {
            condition = true;
        }
    } while (condition == false)
    return userTopic;
}

/*****************************************************************************************************/
function fillTestValues(userTopic) {

    let englishWords = [];
    let czechWords = [];

    switch (userTopic) {
        case "1":
            englishWords = englishWordsFameAndFortuneMovies;
            czechWords = czechWordsFameAndFortuneMovies;
            break;
        case "2":
            englishWords = englishWordsSmartAlecDoors;
            czechWords = czechWordsSmartAlecDoors;
            break;
        case "3":
            englishWords = englishWordsTVShows;
            czechWords = czechWordsTVShows;
            break;
        case "4":
            englishWords = englishWordsKids;
            czechWords = czechWordsKids;
            break;

        default:
            break;
    }
    let objektDvouPoli = { englishWords, czechWords };
    return objektDvouPoli;
}

/*****************************************************************************************************/
function doTest(objektDvouPoli) {

    let englishWords = objektDvouPoli.englishWords;
    let czechWords = objektDvouPoli.czechWords;

    for (let i = 0; i < englishWords.length; i++) {

        let userAnswer = prompt(`Přelož mi slovo "${czechWords[i]}" do angličtiny.`);

        if (userAnswer.toLowerCase() == englishWords[i].toLowerCase()) {
            alert(`Správně. Slovo "${userAnswer}" odpovídá slovu "${czechWords[i]}" = "${englishWords[i]}".`);
            //console.log(userAnswer);
        }
        else {
            alert(`Chyba. Slovo "${userAnswer}" neodpovídá slovu "${czechWords[i]}" = "${englishWords[i]}".`);
        }
    }
}