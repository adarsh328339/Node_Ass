/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

rl.question('Enter N', function(answer){
     var n = answer;
     console.log(n);
});

rl.question('Enter M', function(answer){
    var m = answer;
    console.log(m);
    rl.close();
});
*/

let n = 10;
let m = 15;

let x = n%m; 
let y = n-x; 
let z = n+m-x;

if (n==m){
    console.log(n);
}
else if(Math.abs(n-y) < Math.abs(n-z)){
    console.log(y)
}
else{
    console.log(z);
}







