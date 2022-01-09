// https://developer.mozilla.org/en-US/docs/Web/Events

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);
// console.log(window.getComputedStyle(red));

/*
pass the property reference as "fontFamily" not like "font-family"
*/

// write a function to do this work
const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// console.log(getBGColor(red));
// console.log(getBGColor(pink));
// console.log(getBGColor(orange));

// let color = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//     center.style.background = color;
// })

const magicColorChanger = (element,color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));

// try to add music themes in the divs - explore