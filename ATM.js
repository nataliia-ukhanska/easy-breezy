<script>

let balance = 1000; 
function operatin(operation) 
{ if (operation === 'Balance') { console.log(balance) } 
  else if(operation === 'Withdrow') {
var amount = Number(prompt("Please enter amount of money you want to withdrow", ""));
balance = balance - amount;

 if (balance < amount) {
 console.log('Not enough money')
  console.log(balance) 
 }
 else if (balance > amount) {
 console.log ('Success')
  console.log('Current balance:' + ' ' + balance) 
 }
 }
}

operatin('Balance');
operatin('Withdrow');

</script>