
const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzczZWFiM2ZmMzlkMjAwMTVjMzY0YzciLCJpYXQiOjE3MzU2NjUxOTcsImV4cCI6MTczNjg3NDc5N30.IJgiOr6wp9AJ2JKuUXErw596eziVYcR2ajePocgfODk"
let cartQw = []
let cartQ = JSON.parse(localStorage.getItem('cart')) || [];
console.log('SONO QUI SONO IL TUO CART',cartQ)

let bubbleNum = document.getElementById('bubbleNum')
bubbleNum.innerHTML = cartQ.length



function crateContent(){
  fetch(url, {
      headers: {
      "Authorization": token
      }
      })
      .then(dataRow => dataRow.json())
      .then(dataRefined =>{
          console.log(dataRefined[0].imageUrl)
          let queryStringy = window.location.search
          console.log("HOLAAAA 2!!!" + queryStringy + "qui nessuna stringa query nell URL")
          
         
          for (let i=0; i<dataRefined.length; i++){
          
          
         
          ///////////////////  card  /////////////// 
          let collection = document.getElementById('collection')
          let card = document.createElement('div')
          card.className = 'card'
          card.innerText = 'hello'
          card.innerHTML = `<img class="cover img-fluid"  src="${dataRefined[i].imageUrl}" alt="${dataRefined[i].name}">`
          collection.appendChild(card)

          
        


          ///////////////////  aggiingo eventlistener on cart to create page product  /////////////// 
          card.addEventListener('click', ()=>{
            let enter = document.getElementById('enter')
            enter.style.display = "none";
            let btnHome = document.getElementById('btnHome')
            btnHome.style.display = "none";
            let collection = document.getElementById ('collection')
            collection.style.display = 'none'
            let pageProduct = document.getElementById('pageProduct')

            
            
            /////////////////// content element join in to page Product  /////////////// 
           
             ///////////////////  div xs  /////////////// 
            let xs = document.createElement('div')
            xs.className = 'xs col-6'
            productPage.appendChild(xs) 

            let img = document.createElement('img')
            img.className = 'img'
            img.style.objectFit = "cover"
            img.src = dataRefined[i].imageUrl
            xs.appendChild(img)

             ///////////////////  div xd  /////////////// 
            let xd = document.createElement('div')
            xd.className = 'xd col-6'
            productPage.appendChild(xd) 
            ///////////////////  name  /////////////// 
            let ProductName = document.createElement('h1')
            ProductName.className = 'productName'
            ProductName.innerText = dataRefined[i].name
            xd.appendChild(ProductName)
            ///////////////////  brand  /////////////// 
            let ProductBrand = document.createElement('h4')
            ProductBrand.className = 'productBrand'
            ProductBrand.innerText = `by ${dataRefined[i].brand}`
            xd.appendChild(ProductBrand)
            ///////////////////  dedscription  /////////////// 
            let ProductDescription = document.createElement('p')
            ProductDescription.className = 'productDescription'
            ProductDescription.innerText = dataRefined[i].description
            xd.appendChild(ProductDescription)
            ///////////////////  div in div to cube size select  /////////////// 
            let size = document.createElement('div')
            size.className = 'size row d-flex gap-2 m-0 mt-5   '
            xd.appendChild(size)

            let sizeBox1 = document.createElement('div')
            sizeBox1.className = 'box'
            sizeBox1.id = 'bt'
            sizeBox1.innerHTML = '<p class="p-0 m-0"> S </p>'
            size.appendChild(sizeBox1)

            let sizeBox2 = document.createElement('div')
            sizeBox2.className = 'box'
            sizeBox2.id = 'bt'
            sizeBox2.innerHTML = '<p class="p-0 m-0"> M </p>'
            size.appendChild(sizeBox2)

            let sizeBox3 = document.createElement('div')
            sizeBox3.className = 'box'
            sizeBox3.id = 'bt'
            sizeBox3.innerHTML = '<p class="p-0 m-0"> L </p>'
            size.appendChild(sizeBox3)

            let sizeBox4 = document.createElement('div')
            sizeBox4.className = 'box'
            sizeBox4.id = 'bt'
            sizeBox4.innerHTML = '<p class="p-0 m-0"> XL </p>'
            size.appendChild(sizeBox4)

            let sizeBoxActive = document.querySelectorAll('.box'); 
            console.log(sizeBoxActive);

            sizeBoxActive.forEach(box => {
              box.addEventListener("click", ()=>{
                if(box.classList.contains('active')){
                  box.classList.remove('active')
                }else{
                  box.classList.add('active')
                }

                sizeBoxActive.forEach(otherBox => {
                  if(otherBox !== box){
                    otherBox.classList.remove('active')
                  }
                })
              })
            })

           
      
            ///////////////////  price  /////////////// 
            let ProductPrice = document.createElement('p')
            ProductPrice.className = 'productPrice'
            ProductPrice.innerText = '$ ' + dataRefined[i].price + ',00'
            xd.appendChild(ProductPrice)
            /////////////////// div + button /////////////// 

            let button = document.createElement('div')
            button.className = 'd-flex gap-3 mt-5'
            xd.appendChild(button)

            let buttonAddFav = document.createElement('button')
            buttonAddFav.className = 'buttonAddFav'
            buttonAddFav.innerHTML = '<i class="bi bi-heart-fill fs-4"></i>'
            button.appendChild(buttonAddFav)

            let buttonAddCart = document.createElement('button')
            buttonAddCart.className = 'buttonAddCart'
            buttonAddCart.innerText = 'Add to cart'
            button.appendChild(buttonAddCart)


        buttonAddCart.addEventListener('click', ()=>{
          cartQ.push(dataRefined[i]);
          console.log('CAART HERE!!!! ', cartQ);
          localStorage.setItem('cart', JSON.stringify(cartQ));
          bubbleNum.innerHTML = cartQ.length;

          // Dispara l'evento personalizzato con i dati del carrello
          const eventoDatiCarrello = new CustomEvent('datiCarrelloPronti', { detail: cartQ });
          document.dispatchEvent(eventoDatiCarrello); 
        });


            
            ///////////////////  test url change  /////////////// 
          let link = document.createElement('a')
          link.href = `product.html?id=${dataRefined[i]._id}`
          console.log(link)
          card.appendChild(link)

          let ProductId = dataRefined[i]._id
          let fakeURL = `product.html?id=${ProductId}`

         // history.pushState({productId: dataRefined[i]._id}, '' , fakeURL)

            

        
          })

          
          


          ///////////////////  card absoute over card  /////////////// 
          let cardDitails = document.createElement('div')
          cardDitails.className = 'card-ditails'
          card.appendChild(cardDitails)

          ///////////////////  name  /////////////// 
          let text = document.createElement('h3')
          text.className = 'text'
          text.innerText = dataRefined[i].name
          cardDitails.appendChild(text)

          let textr = document.createElement('h5')
          textr.className = ''
          textr.innerText = dataRefined[0].brand
          cardDitails.appendChild(textr)

          ///////////////////  div on card over card for button e price  /////////////// 
          let div = document.createElement('div')
          div.className = 'price_button'
          cardDitails.appendChild(div)
          let price = document.createElement('div')
          price.className = 'price'
          
          ///////////////////  price text  /////////////// 
          div.appendChild(price)
          let priceText = document.createElement('p')
          priceText.className = "priceText";
          //priceText.innerText ='qwqw'
          priceText.innerText = dataRefined[i].price;
          console.log('Price Text here!! ' + dataRefined[i].price)
          price.appendChild(priceText) 


          



          ///////////////////  menagment icon 1  /////////////// 
          let actions = document.createElement('div')
          actions.className = 'actions'
          div.appendChild(actions)

          let iconOne = document.createElement('a');
          iconOne.href = "#";
          iconOne.innerHTML = '<i class="bi bi-heart-fill fs-4"></i>'; 
          actions.appendChild(iconOne);
         
          ///////////////////  menagment icon 2  /////////////// 
          let actionsQ = document.createElement('div')
          actionsQ.className = 'actionsQ'
          div.appendChild(actionsQ)
          
          let iconTwo = document.createElement('a');
          iconTwo.href = "#";
          iconTwo.innerHTML = '<i class="bi bi-cart2 fs-4"></i>'; // Inserisce direttamente il codice HTML
          actionsQ.appendChild(iconTwo);


          } 
      })
      .catch(err => console.log("Something when wrong = " + err))
}crateContent()
 


let women = document.getElementById('women')
women.addEventListener('click', ()=>{
 women.style.color = 'red'
})