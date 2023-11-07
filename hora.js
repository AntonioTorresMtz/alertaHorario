const fecha = new Date();
const diaSemana = fecha.getDay();
const horaActual = fecha.getHours();
const minutosActuales = fecha.getMinutes();

if ((diaSemana) => 1 && diaSemana <= 5) {
  console.log("Entre Semana");
  verificaHoraSemana();
} else if (diaSemana == 6) {
  console.log("Sabado");
  verificaSabado()
} else if (diaSemana == 0) {
  console.log("Domingo");
  alert(
    "El pago se reflejara hasta el dia lunes, debido a que es domingo."
  );
}

function verificaHoraSemana() {
  if (
    (horaActual > 9 || (horaActual === 9 && minutosActuales >= 30)) &&
    (horaActual < 18 || (horaActual === 18 && minutosActuales <= 0))
  ) {
    console.log("La hora actual está dentro del rango (9:30 AM - 6:00 PM)");
  } else {
    alert(
      "La hora actual está fuera del horario de pagos (9:30 AM - 6:00 PM) El pago se reflejara hasta el dia siguiente."
    );
  }
}

function verificaSabado() {
  if (
    (horaActual > 10 || (horaActual === 10 && minutosActuales >= 0)) &&
    (horaActual < 13 || (horaActual === 13 && minutosActuales <= 30))
  ) {
    console.log("La hora actual está dentro del rango (10:00 AM - 01:30 PM)");
  } else {
    alert(
      "La hora actual está fuera del horario de pagos (10:00 AM - 01:30 PM) El pago se reflejara hasta el dia lunes."
    );
  }
}
