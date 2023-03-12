const loadData=()=>{
fetch('https://restcountries.com/v2/all')
.then(res=>res.json())
.then(data=>display(data))

}
const display =data=>{
    const countryContainer =document.getElementById('country-container');
    // console.log(data)
    
    data.forEach(country => {
    // console.log(country);
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML=`
    <h5>Name:${country.name}</h5>
    <h4>Capital:${country.capital?country.capital:'no capital'}</h4>
    <button onclick="displayDetails('${country.alpha2Code}')">Details<button>
    `
    
    countryContainer.appendChild(countryDiv);
});

}
const displayDetails=code=>{
    // console.log('done',code)
    const url=`
    https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCountryDetails(data[0]));
}

const showCountryDetails = data=>{
    // console.log(data)
    const details = document.getElementById('country-details');
    details.innerHTML=`
    <h3>Name:${data.name.common}</h3>
    <img src="${data.flags.png}">
    `
}

loadData();