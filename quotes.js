const loadQuotes =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data=>display(data))
}
const display = quote =>{
    const blockquote = document.getElementById('quotes');
    // console.log(quote);
    blockquote.innerHTML=quote.quote;
}

// loadQuotes();