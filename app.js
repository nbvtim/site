/* 
    создать объекты с зависимостями и даннымми
    запустить логику
*/

const
    c = console.log
    nodeXlsx = require('node-xlsx')
    fs = require('fs')
    filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/all.xlsx"
    db = nodeXlsx.parse(fs.readFileSync(filePath))

c(db.worksheets[0].data[16])

// fs.writeFileSync("db.json",JSON.stringify(xlsx[0], null, " "))

c("\033[1;32mДанные обновлены !!! \033[m")
