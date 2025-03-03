function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}

function Result() {
   var num1 = document.getElementById('res').value;

   try {
       // Replace "x" with "*" for multiplication
       num1 = num1.replace(/x/g, '*');

       // Handle percentage calculation: Convert "50%" -> "50/100"
       num1 = num1.replace(/(\d+)%/g, "($1/100)");

       var num2 = eval(num1);
       document.getElementById('res').value = num2;
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

function Clear() {
   document.getElementById('res').value = '';
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';

   if (validKeys.includes(key)) {
       if (key === '*') {
           Solve('x');
       } else {
           Solve(key);
       }
   } else if (key === 'Enter') {
       event.preventDefault();
       Result();
   } else if (key === 'Backspace') {
       Back();
   } else if (key.toLowerCase() === 'c') {
       Clear();
   }
});
