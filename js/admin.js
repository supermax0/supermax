const box = document.getElementById("orders");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if(orders.length===0){
 box.innerHTML="<p>لا توجد طلبات</p>";
}

orders.forEach((o,i)=>{
 box.innerHTML += `
 <div class="card" style="margin:15px 0">
  <h3>طلب رقم ${i+1}</h3>
  <p>👤 الاسم: ${o.name}</p>
  <p>📞 الهاتف: ${o.phone}</p>
  <p>📍 العنوان: ${o.address}</p>
  <p>📦 المنتجات:</p>
  <ul>
   ${o.cart.map(p=>`<li>${p.name}</li>`).join("")}
  </ul>
  <p style="color:var(--green)">💰 ${o.total.toLocaleString()} د.ع</p>
  <small>${o.date}</small>
 </div>`;
});
