const uitvoer = document.getElementById('uitvoer')
let dataObject;


const uitvoeren = () => {
    uitvoer.innerHTML = <div>${dataObject[0].tijd}</div>;
    uitvoer.innerHTML += <div>${dataObject[1].tempBuiten}</div>;
}

const starten = () => {
    dataObject = energieData;
    uitvoeren();
}

document.addEventListener('DOMContentLoaded', starten)