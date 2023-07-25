const c = function(t){
    r = Math.floor(Math.random()*6+1)
    s = "\033" + `[3${r}m`
    e = "\033" + `[m`
    console.log( s + t + e )
}
for(i = 1; i<10; i++){
    c("lkadsj")
}
