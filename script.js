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

// fetch("https://telegram.org/bot6608143923:AAGaTw9DMI8Ou6D5ucRiEJqSbbtB8KcQH5o/sendMessage?chat_id=5131265599&text=hello", { mode: 'no-cors' })