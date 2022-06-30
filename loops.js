
for (var x=1; x<= 100; x++)
{
    if( x % 3===0 && x % 5===0)
     {
        console.log(x+"Fizzbuzz");
    } 
    else if ( x % 3 === 0 ) 
    {
            console.log(x+"Fizz");
        }
        else if( x % 5 === 0 )
         {
            console.log(x+"Buzz");
        }
      else
    {
    console.log(x);
} 
}


// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);



// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even


for(var c =0; c<20; c++)
{
    if(c==0 ){
       // console.log(x+ "is even"){ 
    }
     if(c%2==0){
        console.log(c+  "is even")
     }
     else{
        console.log(c+  "is odd")
     }
    }

//     Write a JavaScript conditional statement to find the largest of five numbers in the
// given array

let num1 = 10
let num2 = 40

switch (num1>num2) {
    case false:
      console.log(num2);
      break;
    case true:
      console.log(num1);
     break;
    }

    // Write a JavaScript program to find leap years from 2000 to 2022
    function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++)
        {
             year_range.push(i);
        }
        var new_array = [];

  year_range.forEach(
   function(year)
    { 
       if (test_LeapYear(year)) 
       new_array.push(year);
    });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2022));

function  foo  (){ 
   var  fruit =  'apple'  ; 
   console.log(  'inside function: '  ,fruit); 
   } 
   

