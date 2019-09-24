/*Versie 2.1*/
let temp, cloud, wind, humit;
var apiUrl = '';

async function getJson() {
    const responce = await fetch(apiUrl);
    const data = await responce.json();
    console.log(data);

    temp = data.main.temp;
    cloud = data.clouds.all;
    wind = data.wind.speed;
    humit = data.main.humidity;

    console.log(temp);
    console.log(cloud);
    console.log(wind);
    console.log(humit);

    broek();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(makeApiUrl);
    } else {
             apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&units=metric&APPID=b1ea26fad786941daf48d26368aed215';
    }
}

function makeApiUrl(position) {
    apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&APPID=b1ea26fad786941daf48d26368aed215';
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(apiUrl);

    getJson();
}
getLocation();


function broek() {
    if (temp >= 20 && cloud <= 70 && humit <= 50) {
        console.log('korte broek yes');
        document.querySelector('img').src = 'img/korteBroekJa.png';
        document.querySelector('h1').textContent = 'Jazeker!!';

    } else {
        console.log('geen korte broek');
        document.querySelector('img').src = 'img/korteBroekNee.png';
        document.querySelector('h1').textContent = 'Je kan het doen maar het is niet aan te raden';
    }
}

function vlieger() {
    if (wind >= 4 && humit <= 80) {
        console.log('vlieger yes');
        document.querySelector('img').src = 'img/vliegerJa.png';
        document.querySelector('h1').textContent = 'Maar natuurlijk kan dat';

    } else if (wind >= 13) {
        console.log('vlieger yes');
        document.querySelector('img').src = 'img/vliegerNeeNee.png';
        document.querySelector('h1').textContent = 'Het kan nog steeds, maar dan ben jij misschien wel de vlieger';

    } else {
        console.log('vlieger nee');
        document.querySelector('img').src = 'img/VliegerNee.png';
        document.querySelector('h1').textContent = 'Jammer joh, te weinig wind';
    }
}

function zonnebrand() {
    if (temp >= 20 && cloud <= 50) {
        console.log('lekker smeren yes');
        document.querySelector('img').src = 'img/zonnebrandJa.png';
        document.querySelector('h1').textContent = 'Ja, tenzij je zin hebt om jezelf te verbranden.';

    } else {
        console.log('vlieger nee');
        document.querySelector('img').src = 'img/zonnebrandNee.png';
        document.querySelector('h1').textContent = 'Nee, ookal zullen overbezorgde moeders je in de winter nog insmeren.';
    }
}

document.getElementById('broek').addEventListener('click', broek);
document.getElementById('vlieger').addEventListener('click', vlieger);
document.getElementById('smeer').addEventListener('click', zonnebrand);
