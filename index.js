'use strict';

let services = [];

console.log(services);

let end;

while (!end) {
  let service = prompt('Que servicio necesitas?');
  services.push(service);
  end = confirm('Eso es todo?');
  console.log(services);
}

console.log('TODOS', services);

function express(packageQuantity) {
    let cost = 100;
  
    if (packageQuantity > 60) {
      cost = 2 * packageQuantity * 100;
    }
  
    alert(`Tu costo es ${cost}`);
  }
  
  function nextDay() {
    console.log(0);
  }
  
  switch (prompt('Que servicio quieres?')) {
    case 'Express':
      express();
      break;
    case 'NextDay':
      nextDay();
  }