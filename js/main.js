const box = document.querySelector(".sell")
const load = document.querySelector(".learn_more")
const jelewery = document.querySelector(".best_choose2")
const Electronics = document.querySelector(".best_choose1")
const MEN = document.querySelector(".best_choose3")
const Women = document.querySelector(".best_choose4")
const All = document.querySelector(".best_choose0")
let elSearch = document.querySelector(".search-input")
let elResult = document.querySelector(".result")
const URlJ = "https://fakestoreapi.com/products/category/jewelery"
const URLE = "https://fakestoreapi.com/products/category/electronics"
const URLM = "https://fakestoreapi.com/products/category/men's%20clothing"
const URLW = "https://fakestoreapi.com/products/category/women's%20clothing"
const URLALL = "https://fakestoreapi.com/products"
let obshi = []
let str;
let learn = "https://fakestoreapi.com/products/category/jewelery"


function render(arr) {
  obshi = arr;
  box.innerHTML = arr.map((item) => {
    if (item.title.length > 15) {
      str = item.title.slice(0, 15) + " ..."
    }
    else {
      str = item.title
    }
    return `
    <li class="sell_box">
    <img class="sell_imege" src="${item.image}" alt="e">
    <div class="sell_content">
      <p class="sell_name">${str}</p>
      <div class="outer">
      <div class="ratings-box">
        <div class="ratings-box__item">
          <label>
            <input id="rate-1" class="rating-star-button" type="radio" name="rating-star-button">
            <div class="star-line-box">
              <span class="rating-star"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
            </div>
          </label>
        </div>
        <div class="ratings-box__item">
          <label>
            <input  id="rate-2" class="rating-star-button" type="radio" name="rating-star-button">
            <div class="star-line-box">
              <span class="rating-star"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
            </div>
          </label>
        </div>
        <div class="ratings-box__item">
          <label>
            <input id="rate-3" class="rating-star-button" type="radio" name="rating-star-button">
            <div class="star-line-box">
              <span class="rating-star"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
            </div>
          </label>
        </div>
        <div class="ratings-box__item">
          <label>
            <input checked="checked" id="rate-4" class="rating-star-button" type="radio" name="rating-star-button">
            <div class="star-line-box">
              <span class="rating-star"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
            </div>
          </label>
        
        </div>
        <div class="ratings-box__item">
          <label>
            <input id="rate-5" class="rating-star-button" type="radio" name="rating-str-button">
            <div class="star-line-box">
              <span class="rating-star"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
              <span class="rating-star-line"></span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="price">
    <p class="price_ch">$${Math.round(item.price / 100 * 76)}</p>
    <p class="price_t"><del>$${item.price}</del></p>
    <p class="chegirma">24% Off</p>
    </div>
    <div class="heart">
        <button class="heart_box1">
              <img src="./img/hearts.svg" alt="h">
        </button>
        <button  class="heart_box">
        <img class="ttt" id="${item.id}" src="./img/korzinka.svg" alt="k">
        </button>
        
      </div>
    </div>
    
    </li>
   `
  }).join("")
}


function x() {
  fetch("https://fakestoreapi.com/products").then((respons) => respons.json()).then((data) => {
    
    let arr = data

    elSearch.addEventListener("keyup", function(e){
        elResult.innerHTML = null
        let newArr =  arr.filter(el => el.title.slice(0,15).toLowerCase().includes(elSearch.value.toLowerCase()))
        if(newArr.length === 0){
            elResult.textContent = "unaqa narsa yuq"
        }
        newArr.forEach(element => {
           let h2 = document.createElement("h2")
           h2.textContent = element.title
           elResult.appendChild(h2)
        })
    
    })
    learn = data.slice(0, 8)
    render(learn);
    let count = 0;
    load.addEventListener("click", () => {
      count++;
      if (count % 2 == 1) {
        load.innerHTML = "Exit"
        render(data)
      } else {
        load.innerHTML = "Load More"
        render(learn);
      }

      
    })
  })
}
x()


  fetch(URlJ)
  .then((respons) => respons.json()) .then((data) => {
    jelewery.addEventListener("click",()=>{
      render(data)
    })
  })
  fetch(URLE)
  .then((respons) => respons.json()) .then((data) => {
    Electronics.addEventListener("click",()=>{
      render(data)
    })
  })
  fetch(URLM)
  .then((respons) => respons.json()) .then((data) => {
    MEN.addEventListener("click",()=>{
      render(data)
    })
  })
  fetch(URLW)
  .then((respons) => respons.json()) .then((data) => {
    Women.addEventListener("click",()=>{
      render(data)
    })
  })

    All.addEventListener("click",()=>{
     x()
    })
 











box.addEventListener('click', (e) => {

  obshi.forEach(item => {
    if (e.target.id == item.id) {
      let arr = JSON.parse(localStorage.getItem("item")) || [];
      if (!arr.find(el => el.id == item.id)) {
        arr.push(item)
      } else {
        alert("Bu oldin qo'shilgan")
      }
      console.log(arr);
      localStorage.setItem('item', JSON.stringify(arr));
    }
  });


})
















































