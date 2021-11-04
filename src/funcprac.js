const data = [
    {
        "id":1,
        "kysymys":"Kuinka paljon maksaa euron karamelli?",
        "vastaukset":[
            {"id":1, "v":"ratkaisevan paljon"},
            {"id":2, "v":"kovin vähän"},
            {"id":3, "v":"Ne syö joilla on hilloa."}
        ]
    },
    {
        "id":2,
        "kysymys":"Paljonko painaa tonni lyijyä?",
        "vastaukset":[
            {"id":1, "v":"2,5kg"},
            {"id":2, "v":"5kg"},
            {"id":3, "v":"Alkuaineilta ei koskaan kysytä painoa."},
            {"id":4, "v":"Misson vessa ja koska syödään?"}
        ]
    },
    {
        "id":3,
        "kysymys":"Onko kuuhun pitkä matka?",
        "vastaukset":[
            {"id":1, "v":"On"},
            {"id":2, "v":"Ei"}
        ]
    },
    {
        "id":4,
        "kysymys":"Vieläkö on kesää jäljellä?",
        "vastaukset":[
            {"id":1, "v":"Vielä on"},
            {"id":2, "v":"Mee hoitoon"}
        ]
    }
    ]



const Answer = (vastaus) => {
    return "<li>"+vastaus.v+"</li>";
}

const Question = (kyssari) => {
    var retVal = "<h2>"+kyssari.kysymys+"</h2><ul>";
    kyssari.vastaukset.forEach(element => retVal+=Answer(element))
    retVal+="</ul>"
    return retVal;
}

const Quiz = (dataa) => {
    var retVal = "<div><h1>Tentti</h1>";
    dataa.forEach(element => retVal+=Question(element));
    retVal += "</div>";
    return retVal;
}
console.log(Quiz(data))