//  https://nbvtim.github.io/site/
let c = console.log
let input1 = document.querySelectorAll("input")[0]
input1.placeholder = "ПОИСК"
input1.value = ""
input1.innerText = "innerText"

m = ["keyup",       "keydown",      "mouseover",    "mouseout",     "click"]
input1.addEventListener(m[0], e=>{
    c("Event:", e.type, ", value:", e.target.value)  // c(input1.value)
})



