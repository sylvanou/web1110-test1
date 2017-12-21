// What is printed as a result of the following code? You must show your work
// and explain your thinking or else receive 0 points.

var g = f(10);
console.log( g() );
console.log( g() );
console.log( g() );

// 1. In the first log of g, 10 is passed into the f function
// 2. counter = 10
// 3. return function() increments counter by 1 so it is now 11
// 4. counter is returned incrementing var g to 11
// 5. The next two logs increment g by 1
function f(start){
  var counter = start;
  return function(){
    counter++;
    return counter;
  }
}

// Answer:
// The first console.log(g()) = 11
// The second console.log(g()) = 12
// The third console.log(g()) = 13
