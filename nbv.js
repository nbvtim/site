const c = console.log
const fs = require('fs')
const xlsx = require('node-xlsx').default
const filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/all.xlsx"

// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(filePath))
// const workSheetsFromFile = xlsx.parse(filePath)


let xlsxDB = xlsx.parse(filePath)
let date = Date.now()  // Date().toLocaleDateString()  Date().toLocaleTimeString()
xlsxDB.push(date) 
fs.writeFileSync(`db.json`, JSON.stringify(xlsxDB, null, 4))

c("Данные обновлены !!!")      










// let nbv = "https://api.telegram.org/bot5965701331:AAG21HoAObaJtCGqB-KeVNx1hlabD8e8TB8/sendMessage?chat_id=5131265599\&text=Текст"



/* 
// Работает только с wordx
// Представляет docx в html формате

var mammoth = require("mammoth")
mammoth.convertToHtml({path: "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/Бирки на ключи.docx"})
.then(function(result){
    c(result)
})
.done()

*/

