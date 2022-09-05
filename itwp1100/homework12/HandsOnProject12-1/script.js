/*  
	JavaScript 6th Edition
    Chapter 12
    Hands-on Project 12-1

    Author: Carter Rock
    Date:   5/8/2021

    Filename: script.js
*/


function display(event) {
   $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);