// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function makesendwitch(items:string[]){

    console.log('\n\nmake with a sendwitches');

     items .forEach(element =>console.log('-'+element));

     console.log(`enjoy youre sendwitches !`);
}



makesendwitch(['chicken', 'mayo','bread']);
makesendwitch(['jelly','batter']);
makesendwitch(['vagitable', ]);