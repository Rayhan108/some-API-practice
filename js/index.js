function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
    const comntContainer = document.getElementById('comnt-container');
    for(user of data){
        const div = document.createElement('div');
        div.classList.add('comnt');
        div.innerHTML=`
        <h4>${user.name}</h4>
        <h5>${user.email}</h5>
        <p>${user.body}</p>
        `;
        comntContainer.appendChild(div);
    }
}
loadData();


// ------------------------------todos--------------------------
// function loadTodos(){
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => displayTodos(data))
// }

// loadTodos();


// function displayTodos(todos){
//     console.log(todos);
//     const comntContainer = document.getElementById('comnt-container');
//     for( const todo of todos){
//         const todoDiv = document.createElement('div');
//         todoDiv.innerHTML=`
//         <h4>title: ${todo.title}</h4>
//         `;
//         comntContainer.appendChild(todoDiv);
//     }

// }
