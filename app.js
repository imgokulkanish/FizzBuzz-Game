

function fizzBuzz() {
    var num=document.getElementById("num").value
    
      if ( num % 3 == 0 && num % 5 == 0 ) {
        document.getElementById('para').innerHTML="FizzBuzz!!"
      }
      else if ( num % 3 == 0 ) {
        document.getElementById('para').innerHTML="Fizz!"
      }
      else if ( num % 5 == 0 ) {
        document.getElementById('para').innerHTML="Buzz!"
      }
      else {
        document.getElementById('para').innerHTML=num
      }
    }