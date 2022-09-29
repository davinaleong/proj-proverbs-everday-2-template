console.log(`main.js loaded`)

// Attributes
const attrDataOpen = `data-open`

// Elements
const mainHeaderEl = document.querySelector(`[data-element=main-header]`)

const closeBtnEl = document.querySelector(`[data-element=close]`)
const menuBtnEl = document.querySelector(`[data-element=menu]`)

menuBtnEl.addEventListener(`click`, (e) => {
    mainHeaderEl.setAttribute(attrDataOpen, true)
})

closeBtnEl.addEventListener(`click`, (e) => {
    mainHeaderEl.removeAttribute(attrDataOpen)
})