function reverseString(str) {
  // type your code here
  let newStr = str.split("")
  let yay = []
  newStr.forEach(letter => {
    yay.unshift(letter)
  });
  return yay.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'bomt'");
  console.log("=>", reverseString("tomb"))

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

/* Please add your pseudocode to this file

And a written explanation of your solution

To be completly honest I ran into an almost identical problem when doing code wars except 
this time I made use of forEach intead of a for loop. 

*/

