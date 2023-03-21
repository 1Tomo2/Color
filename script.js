// Selecting Elements
let div = document.querySelector('.b-color')
let body = document.querySelector('body')
let btn = document.querySelector('.click-me')
let span = document.querySelector('span')


// Hex Array
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// Random Number Generator Function 
const getRandomNumber = function(){
    return Math.floor(Math.random() * hex.length)
}


// Event
btn.addEventListener('click',()=>{
    // console.log('clicked')

    let hexColor = '#'
    
    // Loop
    for(let i = 0;i < 6;i++){
        // console.log(getRandomNumber())
        // #12ab35
        hexColor += hex[getRandomNumber()]
        // console.log(i); 
    }

    // css manipulation
    body.style.background = hexColor
    span.innerHTML = hexColor

})



