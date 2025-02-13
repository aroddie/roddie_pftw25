// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// create an h1
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas communicate by humming!';
heading.style.cursor = 'pointer'; // turns curser into pointing hand, indicating it can be clicked
// add event listener
heading.addEventListener('click', handleHeadingClick)
// Attach div to new heading
myEmptyDiv.appendChild(heading);
// create function to make something happen on click
function handleHeadingClick() {
    document.body.style.backgroundColor = "aquamarine";
}