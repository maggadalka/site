let url = './data.json';
const card_product = document.querySelectorAll(".row")[1];
const btn = document.querySelector('.show-more');
let json;

let max_items_count = 6;

const get_data = async () => {
  let response = await fetch(url);
  if (response.ok) { 
    json = await response.json();
    render_data(json)
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
};

const render_data = json => {
  card_product.innerHTML = "";
  for (let i = 0; i < max_items_count; i++){
    let card = json[i];
    card_product.innerHTML += `
    <div class="col-lg-4 col-md-6 mt-2 mb-3">
    <div class="card">
    <a href="card.html?id=${card.id}"><img src="sourse/images/${card.image}" class="card-img-top" alt="..."></a>
    <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.price}</p>
    <button class="btn btn-primary">Купить</button>
    </div>
    </div>
    </div>
    `;
  }

  const buttons = document.querySelectorAll(".btn-primary");
  for ( let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (localStorage.getItem("cart"))
        localStorage.setItem("cart", localStorage.getItem("cart") + json[i].id + ",");
      else
        localStorage.setItem("cart", json[i].id + ",");
    });
  }
};
get_data();

btn.addEventListener("click", () => {
  max_items_count += 6;
  render_data(json);
});
const search = document.getElementById("search");
const button = document.getElementById("button");

button.addEventListener("click", searchClick);

function searchClick() {
  let newJson = json.filter(el => el.name.toLowerCase().includes(search.value.toLowerCase()));
  render_data(newJson);
}
  
  
  
