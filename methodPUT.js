
function update(productId) { 

fetch(url, {
  headers: {
    "Authorization": token
  }
})
.then(dataRow => dataRow.json())
.then(dataRedefine => {
  console.log("Bingo ", dataRedefine);
  
   let modify = document.getElementById("modify")
   modify.addEventListener('click', () => {

    let name = document.getElementById("name")
    name.placeholder = 'HELLOOO'
    let description = document.getElementById("description").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;
    let imageUrl = document.getElementById("imageUrl").value;
    })



})
.catch(err => console.log("Errore nell'aggiornamento del prodotto:", err));


  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, { 
   method: "PUT",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      description: description,
      brand: brand,
      price: price,
      imageUrl: imageUrl
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Prodotto aggiornato:", data);
    window.location.reload();
  })
  .catch(err => console.log("Errore nell'aggiornamento del prodotto:", err));
}

// Chiama update() quando necessario, ad esempio al click di un bottone
// update("6777ca1f58970c001572bb92"); // Esempio con un ID di prodotto
