//  https://nbvtim.github.io/site/
//  index.html открывать мышкой через Live Server
let c = console.log
maininput.addEventListener("keyup", even=>{
    // c(even)
    // c(maininput.value)
    info.style.color = "#0000ff"
    info.innerText = `Запрос: ${maininput.value}`
    result.innerText = "Не найдено"
})
