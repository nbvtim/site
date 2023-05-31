/* 
    создать объекты с зависимостями и даннымми
    запустить логику
*/


const c = console.log
const xlsx = require('node-xlsx')
const fs = require('fs')
const db = xlsx.parse(fs.readFileSync("C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/all.xlsx"))

c("\033[1;32mДанные обновлены !!! \033[m")
