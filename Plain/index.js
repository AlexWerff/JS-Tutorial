
// Variables
var counter = 0

// Function with Parameter
function incrementCounter (amount) {
    counter = counter + amount
}


// Function calling another function
function onIncrementCounter () {
    incrementCounter(1)
    var counterTextP = document.getElementById('counter-text')
    counterTextP.innerText = counter
}

// Basic control structures
function onIncrementWithMax() {
    incrementCounter(1)
    if(counter <= 5) {
        var counterTextP = document.getElementById('counter-text-max')
        counterTextP.innerText = counter
    } else {
        alert('You reached the maximum')
    }
}