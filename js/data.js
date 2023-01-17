const HomeWrap = document.querySelector(".home_wraper")
const local = JSON.parse(localStorage.getItem("item"))

let coount = 0;
function yy() {
  const local = JSON.parse(localStorage.getItem("item"))
  HomeWrap.innerHTML = local.map(e => {
    a = e;
    return ` 
    <div class="home_big_blog">
    <div class="big_content_blog">
    <button id="${e.id}" class="xx">X</button>
    <img class="big_img" src="${e.image}" alt="...">
    <p class="big_text">${e.title}</p>
    </div>
    <div class="big_content_blog2">
    <p id="${e.id}" class="true">
    ${e.price}
    </p>
    <div class="count_blog">
    <button id="${e.id}" class="home_add">+</button>
    <p id="${e.id}" class="home_count">${coount}</p>
    <button id="${e.id}" class="home_remove">-</button>
    </div>
    <p id="${e.id}" class="rent">${Math.ceil(e.price * 100 / 76)}</p> 
    </div>
    </div>
    `
  }).join("")
}
yy()

let home_count = document.querySelectorAll(".home_count")
let home_add = document.querySelectorAll(".home_add")
let rent = document.querySelectorAll('.rent')
let rentTrue = document.querySelectorAll(".true")
let home_remove = document.querySelectorAll(".home_remove")
let xx = document.querySelectorAll(".xx")



for (let k of home_add) {
  k.addEventListener("click", () => {
    for (let i = 0; i < local.length; i++) {
      if (k.id == local[i].id) {
        for (const j of home_count) {
          if (j.id == k.id) {
            let count = j.innerHTML * 1 + 1;
            j.innerHTML = count
            for (const f of rent) {
              if (f.id == k.id) {
                f.textContent = ((count + 1) * (f.textContent * 1))
                for (const o of rentTrue) {
                  if (o.id == k.id) {
                    o.textContent = ((count + 1) * (o.textContent * 1))
                  }
                }
              }
            }
            // 
          }
        }
      }
    }
  })
}

for (let k of home_remove) {
  k.addEventListener("click", () => {
    for (let i = 0; i < local.length; i++) {
      if (k.id == local[i].id) {
        for (const j of home_count) {
          
          if (j.id == k.id && j.innerHTML>0) {
            let count = j.innerHTML * 1 - 1;
          console.log(count);
            j.innerHTML = count
            for (const f of rent) {
              if (f.id == k.id) {
                f.textContent = ( (f.textContent * 1)/(count + 2))
                for (const o of rentTrue) {
                  if (o.id == k.id) {
                    o.textContent = (  (o.textContent * 1)/(count + 2))
                  }
                }
              }
            }
            // 
          }
        }
      }
    }
  })
}




  for (let h = 0; h < xx.length; h++) {
    xx[h].addEventListener("click", () => {
    const local = JSON.parse(localStorage.getItem("item"))
    for (let i = 0; i < local.length; i++) {
      if (xx[h].id == local[i].id) {
        let newarr = []
        for (let d = 0; d < local.length; d++) {
          if (local[d].id == local[i].id) {
            continue
          }
          else {
            newarr.push(local[d])
          }
        }
        localStorage.setItem('item',JSON.stringify(newarr))
        yy()
        
      }
    }
  })
    
  }
  

