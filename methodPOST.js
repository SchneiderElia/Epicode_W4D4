
///////////////////  funzione POST con verifica  ///////////////

///////////////////  funzione per caricare i prodotti in un array  ///////////////

let jacketBoy = []
let jacketGirl = []
let hoodyBoy = []
let hoodyGirl = []
let kimonosBoy = []
let kimonosGirl = []
let shortsBoy = []
let shortsGirl = []


console.log('LOOKKK',jacketBoy)



let createProductButton = document.getElementById("createProductButton");
createProductButton.addEventListener("click", () => {
    
  let nameProduct = document.getElementById("nameProduct").value;
  let brandName = document.getElementById("brandName").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let URL = document.getElementById("URL").value;


  if(nameProduct === ''){
    alert('Inserisci il nome del prodotto')
  }if (brandName === ''){
    alert('Inserisci la marca del prodotto')
  }if (price === ''){
    alert('Inserisci il prezzo del prodotto')
  }if (description === ''){
    alert('Inserisci la descrizione del prodotto')
  }if (URL === ''){
    alert('Inserisci l URL dell immagine')
  }else{
    
  }
  

  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((dataRow) => dataRow.json())
    .then(async (dataRefined) => {
      let productExists = false;
      for (let i = 0; i < dataRefined.length; i++) {
        if (dataRefined[i].name === nameProduct) {
          productExists = true;
          break;
        }
      }

      if (!productExists) {
        await fetch(url, {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameProduct,
            description: description,
            brand: brandName,
            price: price,
            imageUrl: URL,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Prodotto creato:", data);
            let dataObj = JSON.stringify(data)
            console.log(dataObj)
            let product = dataObj
            console.log('The product',product)
            jacketBoy.push(dataObj)
            alert("Prodotto creato con successo!");
            //window.location.reload();
          })
          .catch((error) =>
            console.error("Errore nella creazione del prodotto:", error)
          );
      } else {
        alert("Un prodotto con questo nome esiste già!");
      }
    })
    .catch((error) =>
      console.error("Errore durante il recupero dei prodotti:", error)
    );
});




