// https://github.com/nbvtim/site
// https://nbvtim.github.io/site/

let c = console.log
let cl = "rgb(47, 0, 255)"
setInterval(()=>{
    let colori = document.querySelector("i")

    if(colori.style.color=='red'){
        colori.style.color = '#00ff00'
    }else{
        colori.style.color = 'red'
    }
},500)

