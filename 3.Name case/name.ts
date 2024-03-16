let presonname :string = "";

 presonname = prompt("what is your name?") || "";

let lowarcase  :string =presonname. toLowerCase()
let uppercase  :string =presonname. toUpperCase()
let titlecase  :string = presonname. split(' ').map(word => word. charAt (0).toUpperCase() + word.slice(1).
 toLowerCase()).join(" ")

 if( presonname !== null && presonname !== " "){
    alert(`hello ${presonname}, here are you name in:
    lowercae  : ${lowarcase}
     upercase : ${uppercase} 
      titlecase: ${titlecase}`)
 }
  else{
     alert('please fil youre name 1')
  }