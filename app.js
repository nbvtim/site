/* 
    создать объекты с зависимостями и даннымми
    запустить логику
*/

const
    c = console.log
    nodeXlsx = require('node-xlsx')
    fs = require('fs')
    filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/all.xlsx"
    xlsx = nodeXlsx.parse(fs.readFileSync(filePath))
xlsx[0].date = new Date()
xlsx[0].tg = "5965701331:AAG21HoAObaJtCGqB-KeVNx1hlabD8e8TB8"
fs.writeFileSync("db.json",JSON.stringify(xlsx[0], null, " ") )
c("\033[1;32mДанные обновлены !!! \033[m", Date.now(), new Date())