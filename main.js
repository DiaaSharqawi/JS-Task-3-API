let productsContainer=document.querySelector('.products')


async function getPost(){
    const response = await fetch('https://dummyjson.com/products') // will return inforamtion about our request
   // console.log(response)
    const post = await response.json() // will return the posts
    const products=post.products // will return array of object consist object that contain our main data

    const result=products.map(function(element){
        const product =`<div class="product">
        <div class="product-img">
        <img src="${element.images[0]}" />
      </div>
      <div class="product-info">
      <h2> ${element.title} </h2>
      <p> description : ${element.description} </p>
      <p> price : ${element.price} $ </p>
      <p> brand : ${element.brand} </p>

      </div>
        </div>`
        return product
    }).join('')
    productsContainer.innerHTML=result
}

getPost()

