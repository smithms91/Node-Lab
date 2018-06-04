"use strict";

let array = [
    "It's amazing what can accomplish if you do not care who gets the credit.",
    "When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things.",
    "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
    "Life is about making an impact, not making an income.",
    "The most common way people give up their power is by thinking they don't have any."
];

function randomArray() {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}


module.exports = randomArray;