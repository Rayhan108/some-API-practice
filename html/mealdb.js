const loadMeals=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals));
}
const displayMeals=meals=>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText = '';

    meals.forEach(meal =>{
        // console.log(meal)
        const mealDiv =document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
    <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadMeal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#food-details">
        Details
        </button>
          </div>
    </div>
        `
        mealContainer.appendChild(mealDiv);
    })
   
}
const searchMeal=()=>{
    const searchField = document.getElementById('search-field').value;
    searchField.value='';
    loadMeals(searchField)
}
// --------------------------------------------------------------------------
// নিচে এটার আরেকটা ভার্সন আছে তাই এটা আনকমেন্ট করেছি

// const loadMealDetails=idmeal=>{
//     const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
//     // console.log(idmeal)
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayMealDetails(data.meals[0]));

// }
// ----------------------------------------------------------------------------------

const displayMealDetails=(data)=>{
    document.getElementById('exampleModalLabel').innerText=data.strMeal;
console.log(data.meals);
const mealBody = document.getElementById('meal-details-body');
mealBody.innerHTML=`
<img class="img-fluid img-thumbnail" src="${data.strMealThumb}">
<p>${data.strInstructions}</p>
}
`

}

// other version----------async await------------

const loadMeal = async(idmeal)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
}

loadMeals('fish');