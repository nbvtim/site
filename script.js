//  https://nbvtim.github.io/site/

let c = console.log
input1 = document.querySelectorAll("input")[0]
input1.placeholder = "ПОИСК"
input1.value = ""
input1.innerText = "innerText"
input1.autofocus = true

m = ["keyup",       "keydown",      "mouseover",    "mouseout",     "click"]
input1.addEventListener(m[      0       ], e=>{
    document.querySelectorAll("div")[0].innerText = "Event: " + e.type + "\nvalue: " + e.target.value
})


window.addEventListener('mousemove', function (event) {
    const x = event.clientX
    const y = event.clientY
    
    mouse.style.left = x+5 + 'px'
    mouse.style.top = y-mouse.clientHeight-5 + 'px'

    

    mouse.innerText = `
    mouse: ${event.clientX}:${event.clientY}
    ${event.target}`
    c(event)
})
