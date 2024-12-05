const arr = [2, 3, 4, 5]
const result = arr.map((item) => item % 2 === 0)
console.log(result);
// output= [ true, false, true, false]

console.log(3 + "3");
console.log(3 - "3");
console.log([] + []);
console.log([] - []);
console.log({} + []);
console.log({} - []);
console.log({} + {});
console.log({} - {});

// what is data blinding
//  data binding is the process that establishes a connection between the application UI and business logic.


// create a function for getting value of width on resizing the window
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
})

window.onresize = () => {
    console.log(window.innerWidth);
}

// what is the difference between window.onload and document.onload
// window.onload is fired when the entire page loads including its content (images, css, scripts, etc.)