const cityArr = [
    {
        name: "london",
        coord: [51.505, -0.09]
    },
    {
        name: "paris",
        coord: [48.859, 2.332]
    },
    {
        name: "tokyo",
        coord: [35.673, 139.760]
    },
    {
        name: "moscow",
        coord: [55.749, 37.622]
    },
    {
        name: "sydney",
        coord: [-33.861, 151.202]
    }
]

const wrongArr = [
    "WRONG",
    "NOPE",
    "UHH NO",
    "INCORRECT",
    "YIKES NO"
]

let currentQInd = 0;
let currWrongInd = 0;

var mymap = L.map('mapid').setView(cityArr[currentQInd].coord, 14);

L.tileLayer('https://api.mapbox.com/styles/v1/sinkzor/ckcxugrrp17ya1iqu9jrshvki/tiles/512/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 11,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2lua3pvciIsImEiOiJja2M0ODVuZnAwNWF3MzNvOTY4dHI5M2VvIn0.VSzGUFeL_wYV2ex96gGUIg'
}).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
    
mymap.on('click', onMapClick);

function nextCity() { 
    currentQInd++;
    if (currentQInd === cityArr.length) {
        currentQInd = 0;
    }
    mymap.setView(cityArr[currentQInd].coord, 14);
    document.getElementById("answer").textContent = "";   // resetting answer to blank after changing cities
    return false;
}

document.getElementById("next").onclick = nextCity;

function submitAnswer() {
    let val = document.getElementById("dropdown")[0].value;
    let elem = document.getElementById("answer");
    if (val === cityArr[currentQInd].name) {
        elem.textContent = "CORRECT!";
    } else {
        elem.textContent = wrongArr[currWrongInd];
        currWrongInd++;
        if (currWrongInd === wrongArr.length) {
            currWrongInd = 0;
        }
    }
    return false;
}

document.getElementById("submit").onclick = submitAnswer;