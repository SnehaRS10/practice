let countEl = document.getElementById("count-el")
let count=0

function increment(){
    count=count+1
    countEl.innerText=count
}

function decrement(){
    count=count-1
    countEl.innerText=count
}

function save(){
    entry=document.getElementById("save-el").innerText
    document.getElementById("save-el").textContent += count  + " - "
    countEl.innerText=0
    count=0
}