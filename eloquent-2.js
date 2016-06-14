//Looping a triangle

var block = "";
for (i=0; i < 7; i++) {
  console.log(block += "#");
}





//FizzBuzz

var num = 1;
while (num < 101) {
  if (num%3 === 0 && num%5 === 0) {
    console.log("FizzBuzz");
  } else if (num%3 === 0 /*&& num%5 !== 0*/) {
    console.log("Fizz");
  } else if (/*num%3 !== 0 &&*/ num%5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++;
}





//Chess board

var block = "";
var size = 8;

for (var n=0; n < size; n++) {
  for (var i=0; i < size; i++) {
    if ((n+i)%2 == 0) {
      block += " ";
    } else {
      block += "#";
    }
  }
  block += "\n";
}
console.log(block);
