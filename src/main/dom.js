// import {BoxBottonButton} from '../main/main.js'
const MapTexture = document.getElementById('texture')


let flag_bg_texture_box = true
function TogglePanel(){
    if(flag_bg_texture_box){
        MapTexture.style.display='block'
        flag_bg_texture_box = false
    }else{
        MapTexture.style.display='none'
        flag_bg_texture_box= true
    }
}

// console.log(BoxBottonButton)
// BoxBottonButton()