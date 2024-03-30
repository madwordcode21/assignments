// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician : string[]=['hurry poter','herminone grenger','robn masley',' albums bumbledore'];


function copyarry(mh:string[]){

    return[...mh]
}
                                                                                                               

function make_great(magicianArry:string[]){

    for (let i=0; i<magicianArry.length;i++){

        magicianArry[i]='the Great'+magicianArry[i]
    }
} 



 function show_magicians(magician:string[]){
        

magician.forEach(element => {  
    console.log(element);
     });
 }

const copymagicinearry=copyarry(magician);
 make_great(copymagicinearry);
 console.log(`\n\nthis is origenal arry !`);
 show_magicians(magician);

console.log(`\n\nthis is my  modifed copy arry`);
show_magicians(copymagicinearry);


















