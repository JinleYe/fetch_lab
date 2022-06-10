console.log("HI");

// ---- task 1, task 2----
const displayInfo = (d) => {
    const section = document.querySelector('#section1');
    section.innerHTML = "";
    // console.log(d);
    var item = document.createElement('ul');
    var item1 = document.createElement('li');
    var item2 = document.createElement('li');
    var item3 = document.createElement('li')
    section.append(item, item1, item2, item3);
    
    item1.innerText = "The name of this country is: " + d[0].name;
    item2.innerText = `The ${d[0].name} has the population of : ${d[0].population}`;
    item3.innerHTML = `<img src=${d[0].flags.png} alt="counrty flag">`;
       
}

const getCountryByName = (countryName) => {
    var url = "https://restcountries.com/v2/name/" + countryName;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayInfo(data);
        console.log(data)});

    
    // --- task 6 ---
    fetch(url).then(response => {
        let header = document.querySelector('h1');
        if(response.ok == false){
            header.innerHTML = "There is an error: invalid counrty name.";
        }
        else{
            header.innerHTML = "The data has completed";
        }    
    });
    
}

getCountryByName("Angola");


// ---- task 3 ----
const onPageLoad = (d) => {
    const section = document.querySelector('#section1');
    var item = document.createElement('p');
    section.appendChild(item);
    var allCountries = d.map((item, i) => {
        return " " + item.name;
    })
    item.innerText = "All the countries are: " + allCountries;
}

const getAllCountries = () => {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => onPageLoad(data))
}

// getAllCountries();


// ---- task 4 ----
// const header = document.querySelector('h1');
// header.innerHTML = "The data is being fetched.";
// document.querySelector('#search_button').addEventListener('click', (event) => {
//     var user_enter_country = document.querySelector('#c_Text').value;
//     getCountryByName(user_enter_country);
//     header.innerHTML = "The data has completed";
// });


// ---- task 5 ----
// 👆🏻👆🏻👆🏻

// ---- task 6 ----
// at line 28 in the method getCountryByName
const header = document.querySelector('h1');
header.innerHTML = "The data is being fetched.";
document.querySelector('#search_button').addEventListener('click', (event) => {
    var user_enter_country = document.querySelector('#c_Text').value;
    getCountryByName(user_enter_country);
});



// ---- additional modification ----
// show "The data is being fetched." when on focus
document.querySelector('#c_Text').addEventListener('focus', (event) => {
    header.innerHTML = "The data is being fetched.";
})








