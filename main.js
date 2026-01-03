const grid = document.getElementById("watchGrid");
const modal = document.getElementById("modal");

// 🔥 FALLBACK WATCHES (always show images)
const fallbackWatches = [
  {
    name: "1965 Heritage Chronograph",
    description: "Collector Grade · Limited",
    price: 7200,
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6"
  },
  {
    name: "1978 Swiss Automatic",
    description: "Original Dial · Serviced",
    price: 4800,
    image: "https://images.unsplash.com/photo-1511370235399-1802cae1d32f"
  },
  {
    name: "1959 Dress Classic",
    description: "Museum Condition · Rare",
    price: 12500,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
  }
];

// Render watches
function renderWatches(watches){
  grid.innerHTML="";
  watches.forEach(w=>{
    grid.innerHTML+=`
      <div class="card">
        <img src="${w.image}"
             onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'">
        <h4>${w.name}</h4>
        <span>${w.description}</span>
        <p class="price">$${w.price} USD</p>
        <button onclick="openModal('${w.name}')">Request to Purchase</button>
      </div>
    `;
  });
}

// Try Firestore → else fallback
db.collection("watches").where("status","==","Available")
.get()
.then(snap=>{
  if(snap.empty){
    renderWatches(fallbackWatches);
  } else {
    const data=[];
    snap.forEach(doc=>data.push(doc.data()));
    renderWatches(data);
  }
})
.catch(()=>{
  renderWatches(fallbackWatches);
});

// Modal
function openModal(name){
  modal.style.display="flex";
  document.getElementById("watch").value=name;
}
function closeModal(){
  modal.style.display="none";
}

// Inquiry (demo-safe)
function submitInquiry(){
  if(!name.value||!email.value||!country.value){
    alert("Fill all fields");return;
  }
  alert("Inquiry sent successfully!");
  closeModal();
}
