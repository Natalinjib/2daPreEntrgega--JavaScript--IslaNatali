'use strict';

let fullName = prompt('Ingresa nombre y apellido o razón social');
prompt('Ingresa RUC o DNI');
alert(
  'Conoce nuestros servicios logísticos:\n1. Express (3h)\n2. Sameday (24h)\n3. Next day (48h)'
);
prompt('Ingresa el número de envios que requieres al mes');

let history = [];

let end = false;

while (!end) {
  let service = Number(
    prompt(
      'Escoje cual de nuestros servicios deseas  cotizar:\n1. Express (3h)\n2. Sameday (24h)\n3. Next day (48h)'
    )
  );

  if (service) {
    let packageByService = Number(
      prompt(
        'Indica el numero de envios por este servicio \n *Tener en cuenta que el cáculo contempla los primeros 3km de la ruta de envio'
      )
    );

    let price = 0;
    let serviceName = '';

    switch (service) {
      case 1:
        price = 5 * packageByService;
        serviceName = 'EXPRESS';
        break;
      case 2:
        price = 4 * packageByService;
        serviceName = 'SAMEDAY';
        break;
      case 3:
        price = 3 * packageByService;
        serviceName = 'NEXTDAY';
        break;
      default:
        serviceName = null;
        break;
    }

    alert(`El costo de tu servicio mensual aproximado es de: ${price}  \n Si la orden genera rutas de mas de 3km,la tarifa incluiria costo adicional`);

    if (serviceName) {
      history.push(`${serviceName} => ${price}\n`);
    }

    end = !confirm('Algun otro servicio a contratar?');
  } else {
    break;
  }
}

function Clousure(history,fullName){if (history.length > 0) {
  alert(`Gracias por tu contacto, este es tu resumen:\n${history.join('')}`);
} else {
  alert(`Gracias por tu contacto ${fullName}`);
}
}

Clousure(history,fullName)