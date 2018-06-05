"use strict";

let array = [
    "Life is 10% what happens to you and 90% how you react to it.",
    "It always seems impossible until it's done.",
    "The secret of getting ahead is getting started.",
    "If you're going through hell, keep going.",
    "We may encounter many defeats but we must not be defeated."
];

let randomArray = () => { return array[Math.floor(Math.random() * array.length)]; };

module.exports = randomArray;
