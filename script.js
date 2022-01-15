let output = document.querySelector('.output')
let outputPreviuse = document.querySelector('.output-previuse')



//number**********************************
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
//numbers ends********************************

//operators ***************************************
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply')
let minus = document.querySelector('.minus')
let add = document.querySelector('.add') 
let equal = document.querySelector('.equal')
//operators ends ***************************************

//grays ******************************************
let ac = document.querySelector('.ac');
let nagitive = document.querySelector('.nagitive')
let precent = document.querySelector('.precent')
//grays end *************************************

 
//*******************************

nagitive.addEventListener('click',()=>{
    output.value = ~output.value + 1
    
})

function anothertheOldfunction(it){
    output.value += it.value
    outputPreviuse.value = output.value
    output.value = ""
}



ac.addEventListener('click',()=>{
    output.value = ""
    outputPreviuse.value = ""
})
function AC(){
    if (output.value.length >= 1 ){
        ac.value = 'C'
    } else {
        ac.value = 'AC'
    }
}

equal.addEventListener('click',()=>{
    let outputAnswer = parseFloat(output.value)
    let outputPreviuseAnswer = parseFloat(outputPreviuse.value)

    
    if (outputPreviuse.value.includes("-")) {
        outputPreviuse.value = outputPreviuseAnswer - outputAnswer
    }
    else if(outputPreviuse.value.includes("/")) {
        outputPreviuse.value = outputPreviuseAnswer / outputAnswer
    }
    else if(outputPreviuse.value.includes("+")) {
        outputPreviuse.value = outputPreviuseAnswer + outputAnswer
    }
    else if(outputPreviuse.value.includes("*")){
        outputPreviuse.value = outputPreviuseAnswer * outputAnswer
    }
    else if(outputPreviuse.value.includes("%")){
        outputPreviuse.value = outputPreviuseAnswer / 100 * outputAnswer
    }
    output.value = ""
})
function theOldfunction(it){
    output.value += it.value
}


window.addEventListener('keypress',e=>{
    if(e.keyCode == 49){
        output.value += one.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 50){
        output.value += two.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 51){
        output.value += three.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 52){
        output.value += four.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 53){
        output.value += five.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 54){
        output.value += six.value
    }
})
window.addEventListener('keypress',e=>{
    console.log(e.keyCode)
    if(e.keyCode == 55){
        output.value += seven.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 56){
        output.value += eight.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 57){
        output.value += nine.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 48){
        output.value += zero.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 46){
        output.value += dot.value
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 42){
        output.value += multiply.value
        outputPreviuse.value = output.value
        output.value = ""
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 13 || e.keyCode == 61 ){
        let outputAnswer = parseFloat(output.value)
        let outputPreviuseAnswer = parseFloat(outputPreviuse.value)
    
        
        if (outputPreviuse.value.includes("-")) {
            outputPreviuse.value = outputPreviuseAnswer - outputAnswer
        }
        else if(outputPreviuse.value.includes("/")) {
            outputPreviuse.value = outputPreviuseAnswer / outputAnswer
        }
        else if(outputPreviuse.value.includes("+")) {
            outputPreviuse.value = outputPreviuseAnswer + outputAnswer
        }
        else if(outputPreviuse.value.includes("*")){
            outputPreviuse.value = outputPreviuseAnswer * outputAnswer
        }
        else if(outputPreviuse.value.includes("%")){
            outputPreviuse.value = outputPreviuseAnswer / 100 * outputAnswer
        }
        output.value = ""
    }
})

window.addEventListener('keypress',e=>{
    if(e.keyCode == 45){
        output.value += minus.value
        outputPreviuse.value = output.value
        output.value = ""
    }
})
window.addEventListener('keypress',e=>{
    if(e.keyCode == 43){
        output.value += add.value
        outputPreviuse.value = output.value
        output.value = ""
    }
})

window.addEventListener('keypress',e=>{
    if(e.keyCode == 47){
        output.value += divide.value
        outputPreviuse.value = output.value
        output.value = ""
    }
})

window.addEventListener('keypress',e=>{
    if(e.keyCode == 37){
        output.value += precent.value
        outputPreviuse.value = output.value
        output.value = ""
    }
})

