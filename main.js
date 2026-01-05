const products = [
  {
    name:"1965 Heritage Chronograph",
    price:7200,
    image:"https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6",
    stripe:"https://buy.stripe.com/TEST_LINK_1"
  },
  {
    name:"1978 Swiss Automatic",
    price:4800,
    image:"https://images.unsplash.com/photo-1511370235399-1802cae1d32f",
    stripe:"https://buy.stripe.com/TEST_LINK_2"
  },
  {
    name:"1959 Dress Classic",
    price:12500,
    image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    stripe:"https://buy.stripe.com/TEST_LINK_3"
  }
];

const grid = document.getElementById("products");
const modal = document.getElementById("assistModal");

products.forEach(p=>{
  grid.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <p class="price">$${p.price} USD</p>
      <div class="actions">
        <a href="${p.stripe}" class="buy" target="_blank">Buy Securely</a>
        <button class="assist" onclick="openModal()">Private Assistance</button>
      </div>
    </div>
  `;
});

function openModal(){
  modal.style.display="flex";
}
function closeModal(){
  modal.style.display="none";
}

function submitInquiry(){
  alert("Your request has been received. Our team will contact you shortly.");
  closeModal();
}
