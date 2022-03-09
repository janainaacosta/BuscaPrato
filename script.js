const searchBtn = document.getElementById('btn');
const listaPratos = document.getElementById('pratos');

searchBtn.addEventListener('click', getListaPratos);

function getListaPratos(){
    let Input = document.getElementById('input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Input}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
            html +=
                ` <div class="pratos-item" data-id = "${meal.idMeal}">
                        <div class="pratos-img">
                            <img src= "${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="nomePratos">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `;
            });
        }else{
            alert('Busca inválida.')
        }
        listaPratos.innerHTML = html;
    });
}