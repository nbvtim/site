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

let myDate = `${Date().split(" ")[4]} ${Date().split(" ")[2]}/${Date().split(" ")[1]}/${Date().split(" ")[3]} `
xlsx[0].date =  myDate// Date.now()
xlsx[0].tg = "5965701331:AAG21HoAObaJtCGqB-KeVNx1hlabD8e8TB8"
fs.writeFileSync("db.json",JSON.stringify(xlsx[0], null, " ") )
c("\033[1;32mДанные обновлены !!! \033[m", myDate)
