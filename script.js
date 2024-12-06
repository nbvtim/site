//  https://nbvtim.github.io/site/
document.onload(e)
let c = console.log
let input1 = document.querySelectorAll("input")[0]
input1.placeholder = "ПОИСК"
input1.value = ""
input1.innerText = "innerText"
input1.autofocus = true
c(input1.autofocus)

m = ["keyup",       "keydown",      "mouseover",    "mouseout",     "click"]
input1.addEventListener(m[0], e=>{
    document.querySelectorAll("div")[0].innerText = "Event: " + e.type + " , value: " + e.target.value
})



