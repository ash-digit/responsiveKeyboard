//keys is an array of IDs which are set on the html keyboard layout
const keys = document.querySelectorAll([
    "#a", "#b", "#c", "#d", "#e", "#f", "#g", "#h", "#i", "#j", "#k", "#l", "#m", 
    "#n", "#o", "#p", "#q", "#r", "#s", "#t", "#u", "#v", "#w", "#x", "#y", "#z","#Tab","#CapsLock","#space"
]);
//just the same as keys but I made these separately because I needed the left and right options on my alt and ctrl
const oddkeys = document.querySelectorAll(["#ShiftLeft", "#ShiftRight","#ControlLeft",
"#ControlRight","#AltLeft", "#AltRight", "#Space","#Enter", "#Backspace"]);

//each time an "Keydown" event fires 
document.body.addEventListener('keydown',(e) =>{
    for(i = 0; i < keys.length; i++){
        if(e.key == keys[i].id){
            keys[i].classList.remove("UKey");
            keys[i].classList.add("PKey")
        }
    }
})

//each time an "Keyup" event fires
document.body.addEventListener('keyup',(e) =>{
    for(i = 0; i < keys.length; i++){
        if(e.key == keys[i].id){
            keys[i].classList.remove("PKey");
            keys[i].classList.add("UKey")
        }
    }
})

//the same as the "Keydown" but for the oddkeys
document.body.addEventListener('keydown',(e) =>{
    for(i = 0; i < oddkeys.length; i++){
        if(e.code == oddkeys[i].id){
            oddkeys[i].classList.remove("UKey");
            oddkeys[i].classList.add("PKey")
        }
        
    }
})

//the same as the "Keyup" but for the oddkeys
document.body.addEventListener('keyup',(e) =>{
    for(i = 0; i < oddkeys.length; i++){
        if(e.code == oddkeys[i].id){
            oddkeys[i].classList.remove("PKey");
            oddkeys[i].classList.add("UKey")
        }
        
    }
})
document.addEventListener("keydown", (e) =>{
    console.log(e)
})
