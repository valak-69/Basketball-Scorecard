let home=document.getElementsByClassName("v126_46");
let guest=document.getElementsByClassName("v126_47");
let h=parseInt(home[0].textContent)
let g=parseInt(guest[0].textContent)
function reset(){
    home[0].textContent=0;
    guest[0].textContent=0;
    home[0].setAttribute("style","color:#f94f6d;")
    guest[0].setAttribute("style","color:#f94f6d;")
}
function home3(){
    home[0].textContent=parseInt(home[0].textContent)+3;
    h+=3;
    if(h>g){
        home[0].setAttribute("style","color:#43d170;")
        guest[0].setAttribute("style","color:#f94f6d;")
        // console.log(h)
    }
    if(g>h){
        home[0].setAttribute("style","color:#f94f6d;")
        guest[0].setAttribute("style","color:#43d170;")
        // console.log(g)
    }
}
function home2(){
    home[0].textContent=parseInt(home[0].textContent)+2;
    h+=2;
    if(h>g){
        home[0].setAttribute("style","color:#43d170;")
        guest[0].setAttribute("style","color:#f94f6d;")
        // console.log(h)
    }
    if(g>h){
        home[0].setAttribute("style","color:#f94f6d;")
        guest[0].setAttribute("style","color:#43d170;")
        // console.log(g)
    }
}
function home1(){
    home[0].textContent=parseInt(home[0].textContent)+1;
    h+=1;
    if(h>g){
        home[0].setAttribute("style","color:#43d170;")
        guest[0].setAttribute("style","color:#f94f6d;")
        // console.log(h)
    }
    if(g>h){
        home[0].setAttribute("style","color:#f94f6d;")
        guest[0].setAttribute("style","color:#43d170;")
        // console.log(g)
    }
}
function guest1(){
    guest[0].textContent=parseInt(guest[0].textContent)+1;
    g+=1;
    if(h>g){
        home[0].setAttribute("style","color:#43d170;")
        guest[0].setAttribute("style","color:#f94f6d;")
        // console.log(h)
    }
    if(g>h){
        home[0].setAttribute("style","color:#f94f6d;")
        guest[0].setAttribute("style","color:#43d170;")
        // console.log(g)
    }
}
function guest2(){
    guest[0].textContent=parseInt(guest[0].textContent)+2;
    g+=2;
    if(h>g){
        home[0].setAttribute("style","color:#43d170;")
        guest[0].setAttribute("style","color:#f94f6d;")
        // console.log(h)
    }
    if(g>h){
        home[0].setAttribute("style","color:#f94f6d;")
        guest[0].setAttribute("style","color:#43d170;")
        // console.log(g)
    }
    // guest[0].textContent+=2;
}
function guest3(){
    guest[0].textContent=parseInt(guest[0].textContent)+3;
    g+=3;
    if(h>g){
        home[0].setAttribute("style","color:#43d170;")
        guest[0].setAttribute("style","color:#f94f6d;")
        // console.log(h)
    }
    if(g>h){
        home[0].setAttribute("style","color:#f94f6d;")
        guest[0].setAttribute("style","color:#43d170;")
        // console.log(g)
    }
    // guest[0].textContent+=3;
}
