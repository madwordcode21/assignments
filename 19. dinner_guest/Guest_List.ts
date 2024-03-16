

 let Guest_list :string []=['Imrankhan','nawazsharif','Asif Ali zardari',];

//  for(let i=0; i<Guest_list. length; i++){

//     console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nit is your plesure to invite you in our party. \n\n thank you!' )
//  }
 let absent_guest : string = 'Imrankhan';
 let new_guest : string = 'kamran tessori';

 Guest_list[0] =  new_guest ;

//  for(let i=0; i<Guest_list. length; i++){

//    console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nit is your plesure to invite you in our party. \n\n thank you!' )
// }
    // console.log(`Mr. ${absent_guest} is not comming to party.`)

    // console.log('good news! for big table so we are inviiting 3 more guest.')
  
      // arry pr 3 guest add kiya hai.
    Guest_list.unshift('sir zia khan');
    Guest_list.splice(2,0 ,'maryam nawaz');
    Guest_list.push('bilawer Bhutto Zardari');
   // yah pr mane 6 guest  ko array me print  karaya hai.
//  for(let i=0; i<Guest_list. length; i++){
//    console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nit is your plesure to invite you in our party. \n\n thank you!' )
// }
   // sorry message for guest its not iniviting.       
// console.log('\n sorry we can not arrange big table,only two peoples invite. ');
  // yah pr mane guest remove kiya hai.
while(Guest_list.length > 2){
   let remove_guest= Guest_list.pop();
  //  console.log(`sorry Mr. ${remove_guest}, you not inivited for dinner.`);
     
}
 // humary bachy howy 2 inivited guest.
// for(let i=0; i<Guest_list. length; i++){
//    console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nyou are still inivited. \n\n thank you!' )
// }
  // mane sare guest erra sy remove kara diya.
Guest_list.splice(0,2);
console.log(Guest_list);

//  Excersice 19
 
// pirnt a message indicating  the number of people you are tge iniviting the dinner.

console.log(`total number guest are: ${Guest_list.length}`);