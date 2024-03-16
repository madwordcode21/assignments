"use strict";
let presonname = '';
presonname = prompt("what is your name?") || "";
let lowarcase = presonname.toLowerCase();
let uppercase = presonname.toUpperCase();
let titlecase = presonname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join(" ");
if (presonname !== null && presonname !== " ") {
    alert(`hello ${presonname}, here are you name in:
    lowercae: ${lowarcase}
     upercase: ${uppercase} 
      titlecase ${titlecase}`);
}
else {
    alert("please fil your name !");
}
