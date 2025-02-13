// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an H1 inside of it
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas communicate by humming!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick)
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = "aquamarine";
}