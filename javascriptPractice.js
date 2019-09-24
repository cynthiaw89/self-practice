//reference to the container div that already exists in our HTML
const container = document.querySelector('#container');
//create a new div and store it in the variable content
const content = document.createElement('div');
//add a class and some text to the content div
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
//append that div to container
container.appendChild(content);

//adds a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');
redP.classList.add('redP');
redP.style.color = 'red';
redP.textContent = "Hey I'm red!"
content.appendChild(redP);

//an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.style.color = 'blue';
blueH3.textContent = "I’m a blue h3!";
content.appendChild(blueH3);

//a <div> with a black border and pink background color
const prettyDiv = document.createElement('div');
prettyDiv.classList.add('prettyDiv');
prettyDiv.style.backgroundColor = "pink";
prettyDiv.style.border = "5px solid black"

//another <h1> that says “I’m in a div”
const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'm in a div";
prettyDiv.appendChild(h1InDiv);
//a <p> that says “ME TOO!”
const pInDiv = document.createElement('p');
pInDiv.textContent = "ME TOO!";
prettyDiv.appendChild(pInDiv);

//add pretty div to page
container.appendChild(prettyDiv);

