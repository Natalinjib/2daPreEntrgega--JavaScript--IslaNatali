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
