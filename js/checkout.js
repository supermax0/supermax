// js/checkout.js
document.getElementById("orderForm").onsubmit = e =>{
 e.preventDefault();

 const order = {
  name: e.target[0].value,
  phone: e.target[1].value,
  address: e.target[2].value,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: JSON.parse(localStorage.getItem("cart"))
           .reduce((s,p)=>s+p.price,0),
  date: new Date().toLocaleString()
 };

 let orders = JSON.parse(localStorage.getItem("orders")) || [];
 orders.push(order);
 localStorage.setItem("orders",JSON.stringify(orders));

 localStorage.removeItem("cart");
 alert("✅ تم تسجيل طلبك بنجاح");
 location.href="index.html";
};
