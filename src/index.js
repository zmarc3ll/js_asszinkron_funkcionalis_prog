async function osszesNev() {

    let response = await fetch('./users.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.users.sort(function (a, b) {
        if (a.firstName < b.firstName) { return -1; }
        if (a.firstName > b.firstName) { return 1; }
        return 0;
    });
    let nevLista = document.getElementById('adatLista');
    nevLista.textContent='';

    for (let u of adatok) {
        let li = document.createElement('li');
        li.innerHTML = u.firstName.toUpperCase() + ' ' + u.lastName;
        nevLista.appendChild(li); 
    }
}

async function elerhetoseg() {

    let response = await fetch('./users.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.users.sort(function (a, b) {
        if (a.username < b.username) { return -1; }
        if (a.username > b.username) { return 1; }
        return 0;
    });
    let adatokTablazat = document.getElementById('adatTablazat');
    adatokTablazat.textContent='';

    for (let u of adatok) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = u.username+'<br>';
        td2.innerHTML = u.email+'<br>';
        td3.innerHTML = u.phone+'<br>';
        adatokTablazat.appendChild(tr);
        adatokTablazat.appendChild(td1);
        adatokTablazat.appendChild(td2);
        adatokTablazat.appendChild(td3); 
    }
}

async function osszsuly() {
    let response = await fetch('./users.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.users;
    let sumWeight=0;
    let outputKiiras = document.getElementById('sumWeightOutput');
    let magassag = document.getElementById('magassagInput').value;
    for (let u of adatok) {
        if (u.height>=magassag){
            sumWeight=sumWeight+u.weight;
        }
    }
    let p = document.createElement('p');
    p.innerHTML= sumWeight+ ' kg';
    outputKiiras.appendChild(p);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('usersButton').addEventListener('click', () => { osszesNev() });
    document.getElementById('tableButton').addEventListener('click', () => { elerhetoseg() });
    document.getElementById('sumWeightButton').addEventListener('click', () => { osszsuly() })
})