let tx1 = document.querySelector('#txn1')
let tx2 = document.querySelector('#txtab')
let tx3 = document.querySelector('#txtab3')
let tx4 = document.querySelector('#txtab4')
function tabuada1(){
let sec = document.querySelector('#selc')
if(tx1.value.length == 0){
    alert('digite um numero')
}else{
    let tx = Number(tx1.value)
    let c = 1
    sec.innerHTML = ''
    for(let c=1;c<=10;c++){
        let item = document.createElement('option')
        item.text = `${tx} x ${c} = ${tx*c}`
        sec.appendChild(item)
    }    
}
tx1.value = ''
}
function tabuada2(){
let sec = document.querySelector('#selc')
if(tx1.value.length == 0){
    alert('digite um numero')
}else{
    let tx = Number(tx1.value)
    let c = 1
    sec.innerHTML = ''
    for(let c=1;c<=10;c++){
        let item = document.createElement('option')
        item.text = `${tx} + ${c} = ${tx+c}`
        sec.appendChild(item)
    }    
}
tx1.value = ''
}
function tabuada3(){
let sec = document.querySelector('#selc')
if(tx1.value.length == 0){
    alert('digite um numero')
}else{
    let tx = Number(tx1.value)
    let c = 1
    sec.innerHTML = ''
    for(let c=1;c<=10;c++){
        let item = document.createElement('option')
        item.text = `${tx} - ${c} = ${tx-c.toFixed(2)}`
        sec.appendChild(item)
    }    
}
tx1.value = ''
}