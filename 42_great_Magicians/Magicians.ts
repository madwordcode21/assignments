
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magician : string[]=['hurry poter','herminone grenger','robn masley',' albums bumbledore'];

function make_great(magicianArry:string[]){

    for (let i=0; i<magicianArry.length;i++){

        magician[i]='the Great'+magicianArry[i]
    }
} 











 function show_magicians(magician:string[]){
        

magician.forEach(element => {  
    console.log(element);
     });
 }


 make_great(magician);
 show_magicians(magician);