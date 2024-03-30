// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

import { ftruncate } from "fs";


function storedcarinfo(manufacturer:string, modelname:string, ...extraoption:{[key:string]:any}[]):object{


const carinfo ={

     manufacturer,
     modelname,
     ...Object.assign({}, ...extraoption)

}

 return  carinfo;

};

      let  anwser  = storedcarinfo('honda','civic',{color:'black'},{futurese:['navigator','power windo']});


      console.log(anwser)