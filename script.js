let c = console.log
input1 = document.querySelectorAll("input")[0]
input1.placeholder = "ПОИСК"
input1.value = ""
input1.innerText = "innerText"
input1.addEventListener("keyup", e=>{
    c(e.target.value)
    c(input1.value)
})
input1.addEventListener("mouseover", e => {
    c("Event = mouseover")
})
input1.addEventListener("click", e => {
    c("Event = click")
})


