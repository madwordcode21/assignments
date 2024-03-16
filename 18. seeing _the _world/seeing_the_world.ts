
//store the location in a arry> make sure the arry is not in alphabetical order.
let places :string []=['SUIDIARAB','ITALY','DUBAI','EIFEL TOWER','AGRA'];

// print your array is its original order.
 console.log('original '+ places);

   // print your array  in alphabetical order without modifying the actual list.
   console.log('copy ' + [...places].sort());

   // show that your array is still in this orignal order by printing it.
   console.log('original ' + places);

 // print your array in reverse alphabatical order without changing the order of the original list.
 console.log('copy ' + [...places].sort().reverse());

  // show that your array is still in this orignal order by printin it again.
  console.log('original ' + places);

  // revers the oconsole.log(place);rder in youre list.print the array to show that its order has change.
  console.log('original' + places.reverse());

  // revers the order has list again.print the lis to show its back to its original order.
  console.log('original' + places.reverse());

  //sort your array so its stored in alphabetical order.print the array to show that its order has been changed.
  console.log('original' + places.sort());

  // SORT TO CHANGE ARRAY  SO ITS STORED ITS revers alphabetical order. print the list to show that its order  has changed.
  console.log('original' + places.sort().reverse());