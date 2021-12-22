/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector
const first1 = document.querySelector("[id='first']")
console.log(first1)

// 2. Get the elements with a class of 'second' with querySelector
const second1 = document.querySelector('.second')
console.log(second1)

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
const secondAll = document.querySelectorAll("[class='second']")
console.log(secondAll)
// This method returns all the second classes, while .querySelector returns them as an array

// 4. Get the span element using querySelector
const span = document.querySelector('span')
console.log(span)

// 5. Get multiple span elements using querySelectorAll
const spanAll = document.querySelectorAll('span')
console.log(spanAll)

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
const onlyA = document.querySelector('div > a')
console.log(onlyA)

// 7. Select all elements that contain a "data-target" attribute
const dataTarget = document.querySelectorAll('[data-target]')
console.log(dataTarget)

// 8. Select all elements where the data-target attribute equals "#false"
const targetFalse = document.querySelector('[data-target="#false"]')
console.log(targetFalse)
