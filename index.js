// Code your solutions in this file



function writeCards(nameArray, event){
    let array = []
    for (let i = 0; i < nameArray.length; i++){
        array.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countdown(number){

    while (number >= 0){
        console.log(number)
        number -= 1
    
    }
}