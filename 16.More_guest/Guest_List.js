"use strict";
let Guest_list = ['Imrankhan', 'nawazsharif', 'Asif Ali zardari',];
//  for(let i=0; i<Guest_list. length; i++){
//     console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nit is your plesure to invite you in our party. \n\n thank you!' )
//  }
let absent_guest = 'Imrankhan';
let new_guest = 'kamran tessori';
Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(' Dear Mr.' + Guest_list[i] + ',\n\nit is your plesure to invite you in our party. \n\n thank you!');
}
console.log(`Mr. ${absent_guest} is not comming to party.`);
console.log('good news! for big table so we are inviiting 3 more guest.');
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'maryam nawaz');
Guest_list.push('bilawer Bhutto Zardari');
for (let i = 0; i < Guest_list.length; i++) {
    console.log(' Dear Mr.' + Guest_list[i] + ',\n\nit is your plesure to invite you in our party. \n\n thank you!');
}
