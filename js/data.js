const HomeWrap = document.querySelector(".home_wraper")

const local = JSON.parse(localStorage.getItem("item"))

let coount = 0
function yy() {
  HomeWrap.innerHTML = local.map(e=>{
    a = e
  return ` 
  
  <div class="home_big_blog">
  <div class="big_content_blog">
  <button class="xx">X</button>
   <img class="big_img" src="${e.image}" alt="...">
   <p class="big_text">${e.title}</p>
  </div>
  <div class="big_content_blog2">
  <p class="true">
  $${e.price}
  </p>
  <div class="count_blog">
  <button id="${e.id}" class="home_add">+</button>
  <p class="home_count">${coount}</p>
  <button class="home_remove">-</button>
  </div>
  <p class="rent">$${Math.ceil(e.price*100/76)}</p> 
  </div>
  </div>
  `
  }).join("") 
}

  HomeWrap.addEventListener("click",(el)=>{
    if(el.target.className == "home_add"){
      coount += 1
      
  
  yy()
  
  }
  if(el.target.className == "home_remove" && coount >0){
    
    coount -= 1

yy()

}

if(el.target.className == "xx" ){
localStorage.removeItem("item")

yy()

}
   
    
    })


yy()