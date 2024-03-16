"use strict";
let personname = '';
personname = prompt('what is your name?') || '';
if (personname !== null && personname !== '') {
    alert(`hello ${personname} would you like to learn same pithan today `);
}
else {
    alert('you have to fill this?');
}
