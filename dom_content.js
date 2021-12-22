/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of "first" and save it to a variable called
//    first (use any method you'd like!).
const first5 = document.getElementById('first')
console.log(first5)

// 2. Print just the text of `first`.
const firstText = document.getElementById('first').innerText
console.log(firstText)

// 3. Print the HTML of `first`.
// const firstHTML = document.getElementById('first').innerHTML
console.log(first5)

// 4. Get the section tag from the page and save it to a variable.
const sectionTag = document.querySelector('section')
console.log(sectionTag)

// 5. Print the text content of the section tag
// const sectionText = document.getElementsByName('section').innerText
console.log(sectionTag.innerText)

// 6. Print the HTML content of the section tag
console.log(sectionTag.innerHTML)
