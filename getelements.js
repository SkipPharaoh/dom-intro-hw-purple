/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first'
const firstId = document.getElementById('first')
console.log(firstId)

// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?
firstId.remove()
// The first element was removed from the webpage!

// 3. Get the elements with a class of 'second' with getElementsByClassName:
const secondId = document.getElementsByClassName('second');
console.log(secondId);

// 4. Delete one of the elements with a class of 'second' and refresh the page.
//    Do you get a similar result?
secondId[1].classList.remove('second')
console.log(secondId)
// It removed one of the second-class, so it is not the same results

// 5. Get the span element using getElementsByTagname:
const spanElement = document.getElementsByTagName('span')
console.log(spanElement)

// 6. Add a span anywhere, and re-run the last piece of code. What's different?
const span3 = document.querySelector('div')
const newSpan = document.createElement('span')
newSpan.innerText = 'Created this element'
// newSpan.setAttribute(newSpan)
span3.appendChild(newSpan)
console.log(newSpan)
