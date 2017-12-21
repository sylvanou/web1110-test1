// What is the value of the result variable in the following code? You must show
// your work and explain your thinking or else receive 0 points.

var result = mystery("cow");
// 1. "cow" Is being passed as the argument in the mystery function
function mystery(animal){ 
  var callCount = 0;
// 2. animal does not equal "chicken" so it skips this if statement
// 5. The mystery function gets called with "chicken" passed as an argument and now calls cluck function
  if (animal == "chicken"){
    return cluck();
  }
// 3. At this point animal does == "cow" so the function returns the moo() function
  else if (animal == "cow"){
    return moo();
  }
  else return callCount;
// 6. var callCount is now = 1 and the function returns "cluck"
  function cluck(){
    callCount++;
    return "cluck";
  }
//  4. Moo function gets called and animal is now "chicken" and returns "moo" + mystery("chicken")
  function moo(){
    animal = "chicken";
    return "moo" + mystery(animal);
// 7. return "moo" + "cluck" 
  }
}


// Answer:
console.log(result)
// result = moocluck