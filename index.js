home_Score=document.getElementById("home-score")
guest_Score=document.getElementById("guest-score")

let homeScore=0
let guestScore=0

function add1home(){
    homeScore+=1
    home_Score.innerText=homeScore
}
function add2home(){
    homeScore+=2
    home_Score.innerText=homeScore
}
function add3home(){
    homeScore+=3
    home_Score.innerText=homeScore
}
function add1guest(){
    guestScore+=1
    guest_Score.innerText=guestScore
}
function add2guest(){
    guestScore+=2
    guest_Score.innerText=guestScore
}
function add3guest(){
    guestScore+=3
    guest_Score.innerText=guestScore
}