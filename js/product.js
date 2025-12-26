// js/product.js
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const p = productsData.find(x=>x.id===id);

document.getElementById("product").innerHTML = `
 <img src="${p.image}">
 <h2>${p.name}</h2>
 <p>${p.specs}</p>
 <ul>
  <li>الحجم: ${p.size} بوصة</li>
  <li>النظام: ${p.os}</li>
  <li>الدقة: ${p.resolution}</li>
 </ul>
 <div class="price">${p.price.toLocaleString()} د.ع</div>
 <button onclick="addToCart(${p.id})">إضافة للسلة</button>
`;

function addToCart(id){
 let cart = JSON.parse(localStorage.getItem("cart"))||[];
 cart.push(p);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("تمت الإضافة ✔️");
}
