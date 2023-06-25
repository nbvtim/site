const c = console.log
const fs = require('fs')
const xlsx = require('node-xlsx').default
const filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/all.xlsx"

// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(filePath))
// const workSheetsFromFile = xlsx.parse(filePath)

let xlsxDB = xlsx.parse(filePath)[0]
xlsxDB.date = `Обновленно: ${new Date().toLocaleString()}` // .toLocaleDateString()  .toLocaleTimeString()
fs.writeFileSync("db.json", JSON.stringify(xlsxDB, null, 1))

c("\033[1;32mДанные обновлены !!! \033[m")













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

