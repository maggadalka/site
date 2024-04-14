let card_info = document.querySelector(".card_info");

let url = './data.json';

const get_data = async () => {
  let response = await fetch(url);
  if (response.ok) { 
    let json = await response.json();
    let id = window.location.search.replace("?id=","");
    render_data(json[id - 1]);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
};

const render_data = product => {
    card_info.innerHTML += `
    <p> id = ${product.id}
    <p> Название = ${product.name}
    <p> Цена = ${product.price}
    `;
    
};

get_data();