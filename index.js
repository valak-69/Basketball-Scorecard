let home=document.getElementsByClassName("v126_46");
let guest=document.getElementsByClassName("v126_47");
// if (parseInt(home[0].textContent)>parseInt(guest[0].textContent)) {
//     document.getElementsByClassName("v126_46")[0].setAttribute("style","color:green;")
// } 
// if(parseInt(home[0].textContent)<parseInt(guest[0].textContent)) {
//     document.getElementsByClassName("v126_47")[0].setAttribute("style","color:green;")
// }
// document.getElementsByClassName("v126_46")[0].setAttribute("style","color:green;")
let h=parseInt(home[0].textContent)
let g=parseInt(guest[0].textContent)
if(h>g){
    home[0].setAttribute("style","color:green;")
}
if(g>h){
    guest[0].setAttribute("style","color:green;")
}
function reset(){
    home[0].textContent=0;
    guest[0].textContent=0;
}
function home3(){
    home[0].textContent=parseInt(home[0].textContent)+3;
}
function home2(){
    // home[0].textContent+=2;
    // console.log(home[0].textContent)
    home[0].textContent=parseInt(home[0].textContent)+2;
}
function home1(){
    home[0].textContent=parseInt(home[0].textContent)+1;
    // home[0].textContent+=1;
}
function guest1(){
    guest[0].textContent=parseInt(guest[0].textContent)+1;
}
function guest2(){
    guest[0].textContent=parseInt(guest[0].textContent)+2;
    // guest[0].textContent+=2;
}
function guest3(){
    guest[0].textContent=parseInt(guest[0].textContent)+3;
    // guest[0].textContent+=3;
}
