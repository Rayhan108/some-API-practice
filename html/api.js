const loadBideshi=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>display(data))
}
const display=data=>{
    const bideshini = document.getElementById('bideshini');
console.log(data.results[0])
bideshini.innerHTML=`
<h3>Name:${data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last} <h3>
<h5>Gender:${data.results[0].gender} </h5>
<h5>Email:${data.results[0].email}</h5>
<img src="${data.results[0].picture.medium}">
`
}
loadBideshi()