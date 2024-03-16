

 let Guest_list :string []=['Imrankhan','nawazsharif','Asif Ali zardari',];

 for(let i=0; i<Guest_list. length; i++){

    console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nit is your plesure to invite you in our party. \n\n thank you!' )
 }
    

 let absent_guest : string = 'Imrankhan';

 let new_guest : string = 'kamran tessori';

 Guest_list[0] =  new_guest ;

 for(let i=0; i<Guest_list. length; i++){

   console.log(' Dear Mr.' + Guest_list[i]+ ',\n\nit is your plesure to invite you in our party. \n\n thank you!' )
}
 

    console.log(`Mr. ${absent_guest} is not comming to party.`)