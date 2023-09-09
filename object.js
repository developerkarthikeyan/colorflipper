let btn=document.getElementById('body')
let body=document.getElementById('body')
let wrap=document.getElementById('wrap')
let colortext=document.getElementById('color')
const hex=[1,2,3,4,5,6,7,8,9,'A','B',"C",'D','E','F']
function changebg(){
    let hexcolor="#"
    for(let i=1;i<=6;i++){
        hexcolor+=randomhex()
    }
    console.log(hexcolor)
wrap.style.backgroundColor=hexcolor
colortext.innerHTML=hexcolor
} 



function randomhex(){
    let randomindex=Math.floor(Math.random()*16)
    return hex[randomindex]

}

// function changebg(){
//     console.log("helloboysx")
// }