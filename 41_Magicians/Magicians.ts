// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician : string[]=['hurry poter','herminone grenger','robn masley',' albums bumbledore'];


function show_magicians(magician:string[]){
        

magician.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician);