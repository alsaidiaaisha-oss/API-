    let row = document.querySelector("#row");
let selectMeal = document.querySelector("#mealSelect");

async function callApi(meal) {

  row.innerHTML = `<p class="text-center">Loading...</p>`;

  let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  let data = await result.json();
  let meals = data.recipes;

  let cartona = "";

  for (let i = 0; i < meals.length; i++) {

    cartona += `
      <div class="card recipe-card col-sm-10 col-md-5 col-lg-4 col-xl-3">
        <img src="${meals[i].image_url}" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title">${meals[i].title}</h5>
            <a href="${meals[i].source_url}" target="_blank" class="btn btn-custom">View Recipe</a>
        </div>
      </div>
    `;
  }

  row.innerHTML = cartona;
}

callApi("pizza");

selectMeal.addEventListener("change", function () {
  callApi(this.value);
});