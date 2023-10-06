let shop = document.getElementById('shop');
console.log();

let shopItemData = [{

    id: "sdsdsd",
    name: "Casual Shirt",
    price: 45,
    desc: "fsdd g dgd g gd dg dg dg fghdfhdfjd ",
    img: "images/img-1.jpg"
}, {
    id: "sdfdghjg",
    name: "Official Shirt",
    price: 45,
    desc: "fsdd g dgd g gd dg dg dg fghdfhdfjd ",
    img: "images/img-2.jpg"
}, {
    id: "asdf",
    name: "T-Shirt",
    price: 300,
    desc: "fsdd g dgd g gd dg dg dg fghdfhdfjd ",
    img: "images/img-3.jpg"
}, {
    id: "sfdg",
    name: "Mens Suit",
    price: 45,
    desc: "fsdd g dgd g gd dg dg dg fghdfhdfjd ",
    img: "images/img-4.jpg"
}]
let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((e) => {
        let { id, name, price, desc, img } = e;
        return `
        <div id = "product-id-${id}" class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `;
    }).join(""))
}
generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((e) => e.id === selectedItem.id);
    if (search === undefined) {


        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else {
        search.item += 1;
    }

    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((e) => e.id === selectedItem.id);
    if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((e) => e.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((e) => e.item).reduce((x, y) => x + y, 0);
};