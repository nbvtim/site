const fs = require('fs')
const xlsx = require('node-xlsx').default
const filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/ОПИСИ/all.xlsx"

// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(filePath))
// const workSheetsFromFile = xlsx.parse(filePath)

let xlsxDB = xlsx.parse(filePath)
let date = Date.now()  // Date().toLocaleDateString()  Date().toLocaleTimeString()
xlsxDB.push(date) 
fs.writeFileSync("db.json", JSON.stringify(xlsxDB, null, 4))

c("Данные обновлены !!!")        






function c(text){
    if(typeof text == "string"){
        let m = 
            [
                ["Тёмно-красный",   "\033[31m",	    "\033[41m" ],
                ["Тёмно-зелёный",   "\033[32m",	    "\033[42m" ],
                ["Тёмно-жёлтый",    "\033[33m",	    "\033[43m" ],
                ["Тёмно-синий",     "\033[34m",	    "\033[44m" ],
                ["Темно-пурпурный", "\033[35m",	    "\033[45m" ],
                ["Тёмно-голубой",   "\033[36m",	    "\033[46m" ],
                //["Красный",         "\033[91m",	    "\033[101m"],
                //["Зелёный",         "\033[92m",	    "\033[101m"],
                //["Оранжевый",       "\033[93m",	    "\033[103m"],
                //["Синий",           "\033[94m",	    "\033[104m"],
                //["Пурпурный",       "\033[95m",	    "\033[105m"],
                //["Голубой",         "\033[96m",	    "\033[106m"],
                //["Светло-серый",    "\033[37m",	    "\033[47m" ],
                //["Тёмно-серый",     "\033[90m",	    "\033[100m"],
                //["Стандартный",     "\033[39m",	    "\033[49m" ],
                //["Чёрный",          "\033[30m",	    "\033[40m" ],
                //["Белый",           "\033[97m",	    "\033[107m"]
            ]
        let textOut=""
        for(i=0;i<text.length;i++){
            r = Math.floor(Math.random()*m.length)
            textOut +=  m[r][1] + text[i]
        }
        console.log(textOut + "\033[m")
    }else{
        console.log(text)
    }
}



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

