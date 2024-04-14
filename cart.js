
const wrapper = document.querySelector(".wrapper");

const get_data = async () => {
    let response = await fetch('data.json');
    if (response.ok) {
        json = await response.json();
        render_data(json)
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
};

const render_data = json => {
    let index = 0;
    let price = 0;
    json.filter(item => localStorage.getItem("cart") && localStorage.getItem("cart").includes(item.id)).forEach(item => {
        wrapper.innerHTML +=
            `
            <div class="cart-item">
                <div class="cart-item-img-group">
                    <div class="cart-item-id">${++index}</div>
                        <img class="cart-item-image" alt="Картинка недоступна" src="sourse/images/${item.image}" />
                </div>
                        
                <div class="cart-item-end">
                    <div class="cart-item-text">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price}</div>
                    </div>
                            
                    <button class="delete-cart-item" id=${item.id}>Удалить</button>
                </div>
            </div>
`;
        let buttons = document.querySelectorAll(".delete-cart-item");
        let target = buttons[buttons.length - 1];
        let final = "";
        price += item.price;
        target.addEventListener("click", () => {
            localStorage.getItem("cart").split(',').forEach(el => {
                if (item.id != el) final += el + ",";
            });
            localStorage.setItem("cart", final);
        });        
    });
    wrapper.innerHTML += `<p class='final-price'>Итого: ${price}</p>`;
    wrapper.innerHTML += `<button class="check-order">Оформить заказ</button>`;

    document.querySelectorAll(".delete-cart-item").forEach(btn => {
        btn.addEventListener("click", () => {
            let final = "";
            localStorage.getItem("cart").split(',').forEach(el => {
                if (btn.id != el) final += el + ","; 
            });
            localStorage.setItem("cart", final);
            window.location.reload();
        });
    });
};


get_data();

