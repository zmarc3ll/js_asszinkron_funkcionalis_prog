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
    let adatok = eredmeny.users;
    let adatokTablazat = document.getElementById('adatTablazat');
    adatokTablazat.textContent='';

    for (let u of adatok) {
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('usersButton').addEventListener('click', () => { osszesNev() });


})