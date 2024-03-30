"use strict";
// alien color # 3; turn your if ealse chain from exercise 5-4 into an if ealse.
//. write a there version of this program .making sure each message is printed for this
//approprlate color  alien.
let alien_color = "green";
//. if the alien is green ,print a massage that the player earnd 5 points.
// . if the alien is yellow , print a message that the player earnd 10 points.
// . if the alien is red . print a messsage that the player earnd 15 points.
//version 1 of the poggram;
if (alien_color === "green") {
    console.log(" Version 1! players earnd 5 points");
}
else if (alien_color === "yellow") {
    console.log("player earnd 10 points!");
}
else if (alien_color === "red") {
    console.log("earnd player 15 points");
}
else {
    console.log("plase cilick a right color!");
}
// version 2 of the poggram.
alien_color = "yellow";
if (alien_color === "green") {
    console.log("players earnd 5 points");
}
else if (alien_color === "yellow") {
    console.log(" Version 2! player earnd 10 points!");
}
else if (alien_color === "red") {
    console.log("earnd player 15 points");
}
else {
    console.log("plase cilick a right color!");
}
// Version 3 of the poggram;
alien_color = "red";
if (alien_color === "green") {
    console.log("players earnd 5 points");
}
else if (alien_color === "yellow") {
    console.log("player earnd 10 points!");
}
else if (alien_color === "red") {
    console.log("Version 3!  player earnd 15 points");
}
else {
    console.log("plase cilick a right color!");
}
